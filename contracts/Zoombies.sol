// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ZoombiesUniverse.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Zoombies is ERC721, ERC721Burnable, ZoombiesUniverse {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    string private _baseTokenURI;

    //Tracking affiliate sponsors
    mapping(address => address) public sponsors; // 1 sponsor have many affiliates, but only 1 sponsor, returns sponsor

    //Track the timestamps for users to get their daily pull
    mapping(address => uint256) private timeToCardsPull; //address to timestamp

    //Tracking booster pack count ownership. These are NOT tokens, Player can mint a random NFT
    mapping (address => uint256) public boosterCreditsOwned;

    uint public weiCostOfBooster = 10000000000000000;
    uint256 public zoomGainedPerBoosterCredit = 500;

    uint16 public maxBoostersRewards = 50000;
    uint16 public totalBoostersRewarded = 0;

    //Event Logs
    event LogCardTypeLoaded(uint32 indexed cardTypeId, string cardName, uint editionTotal);
    event LogCardMinted(address indexed buyer, uint tokenId, uint32 indexed cardTypeId, uint editionNumber);
    event LogPackOpened(address indexed buyer, uint8 rarity);
    event LogSponsorLinked(address sponsor, address affiliate);
    event LogSponsorReward(address sponsor, address affiliate, uint zoomReward);
    event LogDailyReward(address player, uint newBoosterBalance);
    event LogRewardBoosters(address winner, uint boostersAwarded);
    event LogSacrificeNFT(address owner, uint256 tokenId, uint16 cardTypeId, uint256 zoomGained);

    constructor(address _zoomTokenContract)
    ERC721("Zoombies", "Zoombie") {
        require(_zoomTokenContract != address(0x0));
        _baseTokenURI = "https://zoombies.world/nft/";
        zoomTokenContract = _zoomTokenContract;
    }

    function buyCard(uint16 _cardTypeId) external payable {
        require(allCardTypes[_cardTypeId].cardTypeId != 0, "Card type ID does not exist");
        require(allCardTypes[_cardTypeId].notStoreOrBonus == 0, "Only cards from store can be minted");
        require(block.timestamp >= storeReleaseTime[_cardTypeId], "Card not released from shop");
        require(allCardTypes[_cardTypeId].totalAvailable >= (cardTypeToEdition[_cardTypeId]+1),
        "All of these cards have been minted");
        require(cardTypesOwned[_msgSender()][_cardTypeId] == false, "You have already minted this type");
        require(msg.value >= allCardTypes[_cardTypeId].weiCost, "You have not paid enough MOVR to mint this type");
        uint zoom = ZoomToken(zoomTokenContract).balanceOf(_msgSender());

        require(zoom >= allCardTypes[_cardTypeId].unlockZoom &&
        msg.value == allCardTypes[_cardTypeId].weiCost || msg.value == allCardTypes[_cardTypeId].weiCost*3,
        "You do not have the required Zoom balance Or MOVR +equivalent");

        //ALL CLEAR ???????? mint new card
        mintZoombieNFT(_cardTypeId);
    }

    function getFreeCard(uint16 _cardTypeId) external payable {
        require(allCardTypes[_cardTypeId].cardTypeId != 0, "Card type ID does not exist");
        require(allCardTypes[_cardTypeId].notStoreOrBonus == 0, "Only cards from store can be minted");
        require(block.timestamp >= storeReleaseTime[_cardTypeId], "Card not released from shop");
        require(allCardTypes[_cardTypeId].totalAvailable >= (cardTypeToEdition[_cardTypeId]+1),
        "All of these cards have been minted");
        require(cardTypesOwned[_msgSender()][_cardTypeId] == false, "You have already minted this type");
        require(allCardTypes[_cardTypeId].weiCost == 0, "You are attempting to mint a paid type");
        uint myZooms = ZoomToken(zoomTokenContract).balanceOf(_msgSender());
        uint zoomCost = ZOOM_BASE_COST * (10 * allCardTypes[_cardTypeId].unlockZoom);
        require(myZooms >= allCardTypes[_cardTypeId].unlockZoom || msg.value == zoomCost,
        "You do not have the required Zoom balance Or MOVR equivalent");

        //ALL CLEAR ???????? claim and mint new card
        mintZoombieNFT(_cardTypeId);
    }

    function sacrificeNFTs(uint256[] memory _tokenIds) external {

        require(_tokenIds.length <= 256, "List of tokens to sacrifice must be less than 257 at a time");

        uint256 sacZoom = 0;
        for (uint i=0; i < _tokenIds.length; i++) {
            burn(_tokenIds[i]); //ensure owner before we roll other data

            uint16 _tempCTiD = nfts[_tokenIds[i]].cardTypeId;
            tokensByRarity[allCardTypes[_tempCTiD].rarity] -= 1;
            sacZoom += allCardTypes[_tempCTiD].sacrificeZoom;
            delete (nfts[_tokenIds[i]]);
            emit LogSacrificeNFT(_msgSender(), _tokenIds[i], _tempCTiD, allCardTypes[_tempCTiD].sacrificeZoom);
        }

        awardZoom(_msgSender(), sacZoom);
        rewardAffiliate(sacZoom);
    }

    //every 8 hours, the address can get 2 free booster cards
    function getBonusBoosters(address _player) external {
        require(block.timestamp >= getTimeToDailyBonus(_player), "Can't claim before time to claim next bonus");

        //Stop re-entrancy, update the lastpull value
        timeToCardsPull[_player] = block.timestamp + 8 hours;

        //Let the world award our friend
        awardZoom(_msgSender(), 10);
        //reward the sponsor
        rewardAffiliate(10);

        // add the boosters and emit event
        boosterCreditsOwned[_player] += 2;
        emit LogDailyReward(_player, boosterCreditsOwned[_player]);
    }

    function linkMySponsor(address _mySponsor) external {
        require(_mySponsor != address(0), "Send a valid sponsor wallet");
        require(sponsors[_msgSender()] == address(0), "You have already linked a sponsor");
        require(_msgSender() != _mySponsor, "You cannot sponsor yourself");

        //All clear?  stop re-entrancy, set the association
        sponsors[_msgSender()] = _mySponsor;

        //Mint the Platinum Sponsor Card
        bool tryAgain = true;
        while (tryAgain) {
            if (pullCard(2)) {
                tryAgain = false;
            }
        }
    }

    function buyBoosterCredits(uint _amount) external payable returns(bool) {
        require(msg.value == (weiCostOfBooster * _amount), "Cost to buy 1 Booster NFT credit is 0.001");

        //All good increase the number owned
        boosterCreditsOwned[_msgSender()] += _amount;

        //Award czxp for booster
        awardZoom(_msgSender(), (zoomGainedPerBoosterCredit * _amount));
        rewardAffiliate(zoomGainedPerBoosterCredit * _amount);

        return true;
    }

    function buyBoosterAndMintNFT() external payable returns(bool) {
        require(msg.value == weiCostOfBooster, "Cost to buy and mint a Booster NFT is 0.001");

        //Award zoom per pack
        awardZoom(_msgSender(), zoomGainedPerBoosterCredit);
        rewardAffiliate(zoomGainedPerBoosterCredit);

        //Pull the card
        uint8 rarity = getRarity(0);
        bool tryAgain = true;
        while (tryAgain) {
            if (pullCard(rarity)) {
                tryAgain = false;
            }
        }

        //Send a log event
        emit LogPackOpened(_msgSender(), rarity);
        return true;
    }

    function mintBoosterNFT(uint zoomWager) external returns(bool) {
        require(boosterCreditsOwned[_msgSender()] > 0, "No Booster credits owned");
        require(zoomWager == 0 || zoomWager >= 1000000 && zoomWager <= 20000000, "Wager must be 0 or between than 1-20M");

        //STOP re-entrancy , decrement number of credits
        boosterCreditsOwned[_msgSender()] -= 1;

        //Pull the card
        uint8 rarity = getRarity(zoomWager);
        bool tryAgain = true;
        while (tryAgain) {
            if (pullCard(rarity)) {
                tryAgain = false;
            }
        }
        //Send a log event
        emit LogPackOpened(_msgSender(), rarity);
        return true;
    }

    function awardBoosterCredits(address _winner, uint8 _amount) external onlyOwner returns(bool) {

        //Check max. for Universe
        require((totalBoostersRewarded + _amount) <= maxBoostersRewards,
        "Reached max. number of Booster credit rewards");

        totalBoostersRewarded += _amount;
        boosterCreditsOwned[_winner] += _amount;
        emit LogRewardBoosters(_winner, _amount);
        return true;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getTimeToDailyBonus(address _player) public view returns(uint256 timeStamp) {

        //check if address exists
        if (timeToCardsPull[_player] == 0) {
            return block.timestamp - 2 seconds;
        }else {
            return timeToCardsPull[_player];
        }
    }

    /**
     * Withdraw balance to wallet
     */
    function withdraw() public onlyOwner returns(bool) {
        payable(_msgSender()).transfer(address(this).balance);
        return true;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

//Private
    function pullCard(uint8 _rarity) private returns (bool) {

        //Get a random number for the card to pull
        uint256 rand = selectRandom(allBoosterCardIds[_rarity].length);

        //hit up the cardTypes
        uint16 _pulledId = allBoosterCardIds[_rarity][rand];
        if
            (allCardTypes[_pulledId].totalAvailable > 0 && //test for limited edition boosters
            (cardTypeToEdition[_pulledId]+1) > allCardTypes[_pulledId].totalAvailable) {
                return false;
            }

        //Give the player this cardType
        mintZoombieNFT(_pulledId);
        return true;
    }

    function mintZoombieNFT(uint16 _cardTypeId) private {
        //Stop re-entrancy, Track the type of card puchased for this owner, so they cant buy again
        cardTypesOwned[_msgSender()][_cardTypeId] = true;

        //Let the world award our friend
        awardZoom(_msgSender(), allCardTypes[_cardTypeId].buyZoom);
        //reward the sponsor
        rewardAffiliate(allCardTypes[_cardTypeId].buyZoom);

        cardTypeToEdition[_cardTypeId] += 1;

        _tokenIdCounter.increment();
        uint256 _newTokenId = _tokenIdCounter.current();

        //now mint the NFT
        _safeMint(_msgSender(), _newTokenId);

        //Create the NFT data on chain!
        NFTdata memory _tempCard = NFTdata({
            cardTypeId:_cardTypeId,
            editionNumber:cardTypeToEdition[_cardTypeId]
        });
        nfts[_newTokenId] = _tempCard;

        tokensByRarity[allCardTypes[_cardTypeId].rarity] += 1;

        emit LogCardMinted(_msgSender(), _newTokenId, _tempCard.cardTypeId, _tempCard.editionNumber);
    }

    /**
     * We always pay our affiliates 20% of the zoom commission
     */
    function rewardAffiliate(uint _totalZoom) private {
        //first check if the caller has a sponsor
        if (sponsors[_msgSender()] != address(0)) {
            uint reward = _totalZoom / 5;
            if (reward == 0) {
                reward = 1;
            }
            awardZoom(sponsors[_msgSender()], reward);
            emit LogSponsorReward(sponsors[_msgSender()], _msgSender(), reward);
        }
    }
}
