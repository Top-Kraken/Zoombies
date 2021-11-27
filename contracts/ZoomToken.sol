// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";


contract ZoomToken is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("ZoomToken", "ZOOM") ERC20Permit("ZoomToken") {
        //Mint Liquidity provider tokens
        _mint(msg.sender, 2000000000e18); // 2 Bil Zoom
    }

    uint16 constant public MAX_WALLETS = 1000;
    uint256 constant public MAX_CONTRIBUTION = 20000000000000000000; // 20 MOVR
    address public zoombiesContract;
    uint16 public totalContributors = 0; //LIVE
    uint256 public totalZoomPurchased = 0;

    //Storage
      //supporters
    mapping (address => uint256) public contributions;    // MOVR contributed per address

    modifier onlyAuthorizedContract() {
        require(_msgSender() == zoombiesContract, "Caller not authorized for this action");
        _;
    }

    //Available only during TGE
    function buy() external payable {
        require(msg.value >= 1 ether && (msg.value <= MAX_CONTRIBUTION), "Contribution must be between 1 and 20 MOVR");
        require((contributions[_msgSender()] + msg.value) <= MAX_CONTRIBUTION,
        "Maximum contribution per wallet is 20 MOVR");

        if (totalContributors >= MAX_WALLETS && contributions[_msgSender()] == 0) {
            revert("Maximum of 1000 contributors has been reached");
        }

      //All clear ?
        if (contributions[_msgSender()] == 0) {
            totalContributors = totalContributors + 1;
        }

        //track total contributions per wallet
        contributions[_msgSender()] += msg.value;
        totalZoomPurchased += convertWeiToZoom(msg.value);

        _mint(_msgSender(), convertWeiToZoom(msg.value));
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function setZoombiesContract(address _zoombiesContract) public onlyOwner {
        require(_zoombiesContract != address(0x0));
        zoombiesContract = _zoombiesContract;
    }

    /**
     *  Called in from our ERC721 contract actions
     */
    function awardZoom(address _to, uint256 _amount) public onlyAuthorizedContract {
        require(_to != address(0));
        require(_amount > 0);

        _mint(_to, _amount);
    }

    /**
     *  Called in from our ERC721 contract actions
     */
    function burnZoom(address _wallet, uint256 _amount) public onlyAuthorizedContract {
        require(_wallet != address(0));
        require(_amount > 0);

        _burn(_wallet, _amount);
    }

   /**
    * Withdraw balance to wallet
    */
    function withdraw() public onlyOwner returns(bool) {
        payable(_msgSender()).transfer(address(this).balance);
        return true;
    }

/* INTERNAL */
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

     /**
      * Our base conversion rate for the TGE
      */
    function convertWeiToZoom(uint weiToConvert) internal pure returns (uint) {
          // 1 ZOOM = 100000000000 wei;
        return (weiToConvert/100000000000) * 1e18;
    }
}
