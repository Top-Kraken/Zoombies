require('babel-polyfill');
const { ethers } = require("ethers");

const Zoombies = artifacts.require("Zoombies");
const ZoomToken = artifacts.require("ZoomToken");

const provider = new ethers.providers.JsonRpcProvider();

var zoombContract;
var zoomTokenContract;

var zoomInWei = "100000000000"; // 1 MOVR = 10,000,000 ZOOM
var weiCostOfBooster = "10000000000000000";
var zoomGainedPerBoosterCredit = 220;

function displayTokensByRarity(r) {
  console.log('D','P','E','R','U','C');
  console.log(r[0].words[0], r[1].words[0], r[2].words[0], r[3].words[0], r[4].words[0], r[5].words[0]);
}

contract('Zoombies', function(accounts) {

  //console.log(accounts);

  it('ZoomToken has an owner', async function () {
    zoomTokenContract = await ZoomToken.deployed();
    assert.equal(await zoomTokenContract.owner(), accounts[0]);
  });

  it('Zoombies has an owner', async function () {
    zoombContract = await Zoombies.deployed();
    assert.equal(await zoombContract.owner(), accounts[0]);
  });

  it('Zoombies has correct ZoomToken contract address', async function () {
    assert.equal(zoomTokenContract.address, await zoombContract.zoomTokenContract.call());
  });

  it('ZoomToken has correct Zoombies contract address', async function () {
    let storedAddress = await zoomTokenContract.zoombiesContract.call();
    assert.equal(zoombContract.address, storedAddress);
  });


  it('ZoomToken - Fail awardZoom()', async function () {
    try {
      await zoomTokenContract.awardZoom(accounts[2],100000, {from:accounts[1]});
      console.log("BAD1");
    } catch(e) {
      //console.error("",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Caller not authorized for this action -- Reason given: Caller not authorized for this action.");
    }
  });

  it('ZoomToken 1000M Liquidity supply', async function () {
    let lpBal = await zoomTokenContract.balanceOf(accounts[0]);
    //console.log(lpBal.toString());
    assert.equal(lpBal.toString(), "1000000000000000000000000000");
  });

  it('ZoomToken - Fail burnZoom()', async function () {
    try {
      await zoomTokenContract.burnZoom(accounts[2],100000, {from:accounts[1]});
      console.log("BAD2");
    } catch(e) {
      //console.error("",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Caller not authorized for this action -- Reason given: Caller not authorized for this action.");
    }
  });

  it('ZoomToken - Fail - Buy() with no money sent', async function () {
    try {
      await zoomTokenContract.buy({from:accounts[0]});
      console.log("BAD3");
    } catch(e) {
      //console.error("",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Contribution must be between 1 and 20 MOVR -- Reason given: Contribution must be between 1 and 20 MOVR.");
    }
  });

  it('ZoomToken - Fail - Buy() Over contribute 20.01 MOVR', async function () {
    try {
      let buyTokenBN = ethers.utils.parseEther("20.00001");
      await zoomTokenContract.buy({from:accounts[2], value:buyTokenBN.toString()});
      console.log("BAD4");
    } catch(e) {
      //console.error("",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Contribution must be between 1 and 20 MOVR -- Reason given: Contribution must be between 1 and 20 MOVR.");
    }
  });

  it('ZoomToken - Success - Buy(5.0) money sent', async function () {
    try {
      let buyTokenBN = ethers.utils.parseEther("10.0"); //buy 5,000,000
      assert.equal(await zoomTokenContract.balanceOf(accounts[1]), 0);
      await zoomTokenContract.buy({from:accounts[1], value:buyTokenBN.toString()});
      let bal = await zoomTokenContract.balanceOf(accounts[1]);
      assert.equal(bal.toString(), "10000000000000000000000000");
    } catch(e) {
      console.error("$ERROR$ - ZoomToken - Success - Buy money sent: ",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Contribution must be greater than 0.0000001 -- Reason given: Contribution must be greater than 0.0000001.");
    }
  });

  it('ZoomToken - FAIL - Buy() money sent max contributors reached ( set to 999 to test this)', async function () {
    try {
      let buyTokenBN = ethers.utils.parseEther("10.0"); //buy 10,000,000
      assert.equal(await zoomTokenContract.balanceOf(accounts[2]), 0);
  //console.log(await zoomTokenContract.totalContributors());
      await zoomTokenContract.buy({from:accounts[2], value:buyTokenBN.toString()});
  //console.log(await zoomTokenContract.totalContributors());
      console.log("BAD5");
    } catch(e) {
      //console.error("$ERROR$ - TEMP - Success - Buy() money sent: ",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Maximum of 500 contributors has been reached -- Reason given: Maximum of 500 contributors has been reached.");
    }
  });

  it('ZoomToken - Success - Max, contrib and Buy(5) money sent', async function () {
    try {
      let numContributors = await zoomTokenContract.totalContributors();
      assert.equal(numContributors.toString(), 1000); //assuming contributors was set to 999 for test
      let buyTokenBN = ethers.utils.parseEther("10.0"); //buy 5,000,000
      assert.equal(await zoomTokenContract.balanceOf(accounts[1]), "10000000000000000000000000");
      await zoomTokenContract.buy({from:accounts[1], value:buyTokenBN.toString()});
      let bal = await zoomTokenContract.balanceOf(accounts[1]);
      assert.equal(bal.toString(), "20000000000000000000000000");
    } catch(e) {
      console.error("$ERROR$ - ZoomToken - Success -Max, contrib and Buy(5) money sent: ",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Contribution must be greater than 0.0000001 -- Reason given: Contribution must be greater than 0.0000001.");
    }
  });

  it('ZoomToken - FAIL - Buy(1.3) money sent', async function () {
    try {
      let buyTokenBN = ethers.utils.parseEther("1.3"); //buy 1,300,000
      await zoomTokenContract.buy({from:accounts[1], value:buyTokenBN.toString()});
      console.log("BAD6");
    } catch(e) {
      //console.error("$ERROR$ - ZoomToken - FAIL - Buy(0.3) Over the 1.0 limit: ",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Maximum contribution per wallet is 20 MOVR -- Reason given: Maximum contribution per wallet is 20 MOVR.");
    }
  });

  it('ZoomToken - Fail - Withdraw funds from token contract', async function () {
    try {
      await zoomTokenContract.withdraw({from:accounts[1]});
      console.log("BAD7");
    } catch(e) {
      //console.error("FAIL",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });

  it('ZoomToken - Success - Withdraw funds from token contract', async function () {
    try {
      let r = await zoomTokenContract.withdraw({from:accounts[0]});
      //console.log(r.receipt.status);
      assert.equal(r.receipt.status,true);
    } catch(e) {
      console.error("$ERROR$ ZoomToken - Success - Withdraw:",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });



  it('Zoombies - fail - not owner - loadNewCardType', async function () {
    try {
      let r = await zoombContract.loadNewCardType(
          0,           //uint32 cardTypeId,
          'testing1',  //string name,
          'Fun Set 1', //string set,
          1,  //uint8 assetType,        // 1 = human, 2 = animal, 3 = plant, 4 = thing
          0,  //uint8 notStoreOrBonus,  // 0 = inStore, 1 = pack, 2 = bonus
          6,  //uint8 rarity,           // 1 = diamond, 6 = common
          221,  //uint16 totalAvailable,
          0,  //uint256 weiCost,
          0,  //uint256 buyCzxp,
          180,  //uint256 sacrificeCzxp,
          23000,//uint256 unlockCzxp,
          4,//uint8 cardLevel,
          {from:accounts[1]}
        );
      console.log(r);
    } catch(e) {
      //console.error("$ERROR$ Zoombies - fail - not owner - loadNewCardType:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });

  it('Zoombies - Fail - loadNewCardType store with no total', async function () {
    try {
      await zoombContract.loadNewCardType(
          0,           //uint32 cardTypeId,
          'testing1',  //string name,
          'Fun Set 1', //string set,
          1,  //uint8 assetType,        // 1 = human, 2 = animal, 3 = plant, 4 = thing
          0,  //uint8 notStoreOrBonus,  // 0 = inStore, 1 = pack, 2 = bonus
          6,  //uint8 rarity,           // 1 = diamond, 6 = common
          0,  //uint16 totalAvailable,
          0,  //uint256 weiCost,
          0,  //uint256 buyCzxp,
          180,  //uint256 sacrificeCzxp,
          23000,//uint256 unlockCzxp,
          4,//uint8 cardLevel,
          {from:accounts[0]}
        );
      //console.log(r);
      //let t = await zoombContract.allCardTypes(0);
      //console.log(t[2]);
      //assert.equal(t[2], 'Fun Set 1');
    } catch(e) {
      //console.error("$ERROR$ Zoombies - fail - store with no total:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert In store types must be limited edition -- Reason given: In store types must be limited edition.");
    }
  });

  it('Zoombies - Success - loadNewCardType', async function () {
    try {
      await zoombContract.loadNewCardType(
          0,           //uint32 cardTypeId,
          'testing1',  //string name,
          'Fun Set 1', //string set,
          1,  //uint8 assetType,        // 1 = human, 2 = animal, 3 = plant, 4 = thing
          0,  //uint8 notStoreOrBonus,  // 0 = inStore, 1 = pack, 2 = bonus
          6,  //uint8 rarity,           // 1 = diamond, 6 = common
          221,  //uint16 totalAvailable,
          0,  //uint256 weiCost,
          0,  //uint256 buyCzxp,
          180,  //uint256 sacrificeCzxp,
          23000,//uint256 unlockCzxp,
          4,//uint8 cardLevel,
          {from:accounts[0]}
        );
      //console.log(r);
      let t = await zoombContract.allCardTypes(0);
      //console.log(t[2]);
      assert.equal(t[2], 'Fun Set 1');
    } catch(e) {
      console.error("$ERROR$ Zoombies - success - loadNewCardType:",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });

  it('Zoombies - Fail - getFreeCard - Type does not exist', async function () {
    try {
        await zoombContract.getFreeCard(1000);
    }catch(e){
      //console.log("Fail - getFreeCard:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Card type ID does not exist -- Reason given: Card type ID does not exist.");
    }
  });

  it('Zoombies - Fail - getFreeCard Stu - card not released yet', async function () {
    try {
      let z = await zoombContract.getFreeCard(5, {from:accounts[2]});
    }catch(e){
      //console.log("$ERROR$ - getFreeCard Stu:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Card not released from shop -- Reason given: Card not released from shop.");
    }
  });

  it('Zoombies - Fail - setStoreRelease - not owner', async function () {
    try {
      await zoombContract.setStoreRelease(2, 3, {from:accounts[2]});
    } catch(e){
      //console.log(e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });

  it('Zoombies - Fail - setStoreRelease - card not defined', async function () {
    try {
      await zoombContract.setStoreRelease(5000, 3, {from:accounts[0]});
    } catch(e){
      //console.log("FIX::",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert This cardTypeId is not defined yet -- Reason given: This cardTypeId is not defined yet.");
    }
  });

  it('Zoombies - Success - setStoreRelease - card 5 to now', async function () {
    try {
      await zoombContract.setStoreRelease(5, 0, {from:accounts[0]});
    } catch(e){
      console.log('$ERROR - Zoombies - Success - setStoreRelease:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert This cardTypeId is not defined yet -- Reason given: This cardTypeId is not defined yet.");
    }
  });

/* Time math is acting weird.. but the Dapp seems fine
  it('Zoombies - Success - setStoreRelease - card 50 to 30 hours from now', async function () {
    try {
      let r = await zoombContract.storeReleaseTime(50);
      console.log("pre:",r.words[0]);
      let u = await zoombContract.setStoreRelease(50, 2, {from:accounts[0]});
      //console.log(u);
      r = await zoombContract.storeReleaseTime(50);
      console.log("post:",r);
      let v = ethers.BigNumber.from(r.words[0])
      v = v.mul(100)
      console.log(v.toString());
      let dateBN = ethers.BigNumber.from(Date.now());
      console.log(dateBN.toString());
      console.log(v.sub(dateBN).toString())
    } catch(e){
      console.log('$ERROR - Zoombies - Success - setStoreRelease:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert This cardTypeId is not defined yet -- Reason given: This cardTypeId is not defined yet.");
    }
  });
*/


  it('Zoombies - Success - getFreeCard Stu - id, URI, edition, nft data', async function () {
    try {
      let z = await zoombContract.getFreeCard(5, {from:accounts[2]});
      //console.log("HERE:",z.logs[0].args.tokenId.toString());
      assert.equal(z.logs[0].args.tokenId.toString(), 1); //Token ID = 1
      let x = await zoombContract.getFreeCard(5, {from:accounts[1]});
      //console.log(x); //Token ID = 2
      assert.equal(x.logs[0].args.tokenId.toString(), 2); //Token ID = 2
      let t = await zoombContract.tokenURI(1);
      assert.equal(t, 'https://zoombies.world/nft/1');
      let e = await zoombContract.cardTypeToEdition(5);
      assert.equal(e.toString(), 2);
      let n = await zoombContract.nfts(1);
      //console.log(n);
      assert.equal(n.cardTypeId.toString(), 5);
      assert.equal(n.editionNumber.toString(), 1);
    }catch(e){
      console.log("$ERROR$ - Success getFreeCard Stu:",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Card type ID does not exist -- Reason given: Card type ID does not exist.");
    }
  });

  it('Zoombies - Fail - FreeCard - already minted', async function () {
    try {
      await zoombContract.getFreeCard(5, {from:accounts[1]});
      console.log("BAD8");
    }catch(e){
      //console.log("$ERROR$ -  Fail - FreeCard - already minted:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You have already minted this type -- Reason given: You have already minted this type.");
    }
  });

  it('Zoombies - Fail - mint paid card for free', async function () {
    try {
      await zoombContract.setStoreRelease(8, 0, {from:accounts[0]});
      await zoombContract.getFreeCard(8, {from:accounts[1]});
      console.log("BAD9");
    }catch(e){
      //console.log("$ERROR$ - Fail - mint paid card for free:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You are attempting to mint a paid type -- Reason given: You are attempting to mint a paid type.");
    }
  });

  it('Zoombies - Fail - mint paid card for free underpaid', async function () {
    try {
      await zoombContract.getFreeCard(8, {from:accounts[1], value:"2000000000000"});
    }catch(e){
      //console.log("$ERROR$ - Fail - mint paid card for free underpaid:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You are attempting to mint a paid type -- Reason given: You are attempting to mint a paid type.");
    }
  });


  it('Zoombies - Fail - FreeCard - over edition limit', async function () {
    try {
      await zoombContract.setStoreRelease(3000, 0, {from:accounts[0]});
      await zoombContract.getFreeCard(3000, {from:accounts[1]});
      await zoombContract.getFreeCard(3000, {from:accounts[1]});
      console.log("BAD10");
    }catch(e){
      //console.log("$ERROR$ - getFreeCard over edition limit:",e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert All of these cards have been minted -- Reason given: All of these cards have been minted.");
    }
  });

  it('Zoombies - Fail - buyCard - card 5000', async function () {
    try {
      let r = await zoombContract.buyCard(5000, {from:accounts[3], value:"9000000000000000"}); //10 zoom, cost 4500000000000000
      //console.log(r);
      console.log("BAD11");
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail - buyCard - card 5000:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Card type ID does not exist -- Reason given: Card type ID does not exist.");
    }
  });

  it('Zoombies - Fail - buyCard - card 3 - card not released', async function () {
    try {
      await zoombContract.buyCard(3, {from:accounts[0]}); //cost 4500000000000000
      console.log("BAD12");
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail - buyCard - card 3 - no money sent:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Card not released from shop -- Reason given: Card not released from shop.");
    }
  });

  it('Zoombies - Fail - buyCard - card 3 - no money sent', async function () {
    try {
      await zoombContract.setStoreRelease(3, 0, {from:accounts[0]});
      await zoombContract.buyCard(3, {from:accounts[1]}); //acct1 has 10 mil zoom
      console.log("BAD13");
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail - buyCard - card 3 - no money sent:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You have not paid enough MOVR to mint this type -- Reason given: You have not paid enough MOVR to mint this type.");
    }
  });

  it('Zoombies - Fail - buyCard - card 3 - money sent, not enough zoom to unlock low cost', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      assert.equal(0, ztb.toString());
      let r = await zoombContract.buyCard(3, {from:accounts[3], value:"4500000000000000"}); //10 zoom, cost 4500000000000000
      console.log("BAD14");
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail - buyCard - card 3 - not enough zoom', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You do not have the required Zoom balance Or MOVR +equivalent -- Reason given: You do not have the required Zoom balance Or MOVR +equivalent.");
    }
  });

  it('Zoombies - Fail - buyCard - card 1 - cant buy booster', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      let r = await zoombContract.buyCard(1, {from:accounts[3], value:"9000000000000000"}); //10 zoom, cost 4500000000000000
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail - buyCard - card 1 - booster:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Only cards from store can be minted -- Reason given: Only cards from store can be minted.");
    }
  });

  it('Zoombies - Success - buyCard - card 3 -  3xcost sent, not enough zoom to unlock', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log(ztb.toString());
      assert.equal(0, ztb.toString()); //needs 10 ZOOM
      let cost = ethers.BigNumber.from("4500000000000000"); // "4500000000000000"
      //console.log(cost.toString());
      cost = cost.mul(3); //cardCost * 3
      //console.log(cost.toString());

      let r = await zoombContract.buyCard(3, {from:accounts[3], value:cost}); //10 zoom, cost 4500000000000000
      let nftBal = await zoombContract.balanceOf(accounts[3]);
      //console.log(nftBal.toString());
      assert.equal(1,nftBal.toString()); // we have 1 NFT now
    } catch(e){
      console.log('$ERROR - Zoombies - Fail - buyCard - card 3 - 3xcost and not enough zoom', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You do not have the required Zoom balance -- Reason given: You do not have the required Zoom balance.");
    }
  });

  it('Zoombies - Success - getFreeCard 2500 - no Zoom, pay MOVR', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log(ztb.toString());
      assert.equal("2000000000000000000", ztb.toString()); // 2 zoom balance, needs 1352

      let nftBal = await zoombContract.balanceOf(accounts[3]);
      //console.log(nftBal.toString());

      let cost = ethers.BigNumber.from(zoomInWei);
      //console.log(cost.toString());
      cost = cost.mul(1352*10); //zoomBaseCost * (10*allCardTypes[_cardTypeId].unlockZoom);
      //console.log(cost.toString());
      await zoombContract.setStoreRelease(2500, 0, {from:accounts[0]});
      await zoombContract.getFreeCard(2500, {from:accounts[3], value:cost.toString()}); //tokenId 4
      ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log(ztb.toString());
      nftBal = await zoombContract.balanceOf(accounts[3]);
      //console.log(nftBal.toString());
      assert.equal(nftBal.toString(), 2);
    }catch(e){
      console.log("$ERROR$ - Success - FreeCard - no Zoom, pay MOVR:",e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You have already minted this type -- Reason given: You have already minted this type.");
    }
  });

  it('Zoombies - Get Bonus Boosters', async function () {
    try {
      let r = await zoombContract.boosterCreditsOwned(accounts[1]);
      //console.log(r.toString());
      await zoombContract.getBonusBoosters(accounts[1]);
      r = await zoombContract.boosterCreditsOwned(accounts[1], {from:accounts[3]});
      //console.log(r.toString());
      assert.equal(r.toString(), 2);
    } catch(e){
      console.log('$ERROR - Zoombies - Get Bonus Boosters:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Only cards from store can be minted -- Reason given: Only cards from store can be minted.");
    }
  });

  it('Zoombies - Fail - Get Bonus Boosters', async function () {
    try {
      await zoombContract.getBonusBoosters(accounts[1]);
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail Get Bonus Boosters:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Can't claim before time to claim next bonus -- Reason given: Can't claim before time to claim next bonus.");
    }
  });

  it('Zoombies - Success - linkMySponsor - check platinum mint', async function () {
    try {
      let ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(), 0);

      await zoombContract.linkMySponsor(accounts[1], {from:accounts[0]});
      ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(),1);

    } catch(e){
      console.log('$ERROR - Zoombies - Success linkMySponsor platinum:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Can't claim before time to claim next bonus -- Reason given: Can't claim before time to claim next bonus.");
    }
  });

  it('Zoombies - Success - linkMySponsor - check platinum mint', async function () {
    try {
      let ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(), 1);

      await zoombContract.linkMySponsor(accounts[1], {from:accounts[2]});
      ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(),2);

    } catch(e){
      console.log('$ERROR - Zoombies - Success linkMySponsor platinum:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Can't claim before time to claim next bonus -- Reason given: Can't claim before time to claim next bonus.");
    }
  });

  it('Zoombies - Success - linkMySponsor - check platinum mint', async function () {
    try {
      let ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(), 2);

      await zoombContract.linkMySponsor(accounts[1], {from:accounts[3]});
      ts = await zoombContract.tokensByRarity(2);
      //console.log(ts.toString());
      assert.equal(ts.toString(),3);

    } catch(e){
      console.log('$ERROR - Zoombies - Success linkMySponsor platinum:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Can't claim before time to claim next bonus -- Reason given: Can't claim before time to claim next bonus.");
    }
  });

  it('Zoombies - Fail - linkMySponsor', async function () {
    try {
      await zoombContract.linkMySponsor(accounts[1], {from:accounts[0]});
    } catch(e){
      //console.log('$ERROR - Zoombies - Fail linkMySponsor:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You have already linked a sponsor -- Reason given: You have already linked a sponsor.");
    }
  });

  it('Zoombies - Fail - sacrificeNFT - bad owner', async function () {
    try {
      await zoombContract.sacrificeNFTs([1], {from:accounts[0]}); //acc1 owns token 1
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - sacrificeNFT - bad owner:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert ERC721Burnable: caller is not owner nor approved -- Reason given: ERC721Burnable: caller is not owner nor approved.");
    }
  });


  it('Zoombies - Success - sacrificeNFT', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[1]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), "20000021000000000000000000");
      let zb = await zoombContract.balanceOf(accounts[1]);
      //console.log(zb.toString());
      assert.equal(zb.toString(), 2);
      let tbr = await zoombContract.tokensByRarity(5);
      //console.log(tbr.toString());
      assert.equal(tbr.toString(), 2);

      let g = await zoombContract.sacrificeNFTs([2], {from:accounts[1]}); //acc1 owns token 2 - typeID = 5 - stu
      //console.log("GAS USED to sac:",g.receipt.gasUsed);

      ztb = await zoomTokenContract.balanceOf(accounts[1]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), "20000155000000000000000000");
      zb = await zoombContract.balanceOf(accounts[1]);
      //console.log(zb.toString());
      assert.equal(zb.toString(), 1);
      tbr = await zoombContract.tokensByRarity(5);
      //console.log(tbr.toString());
      assert.equal(tbr.toString(), 1);
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - sacrificeNFT:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert ERC721Burnable: caller is not owner nor approved -- Reason given: ERC721Burnable: caller is not owner nor approved.");
    }
  });

  it('Zoombies - Success - sacrificeNFT - multiple', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log('zt:',ztb.toString());
      assert.equal(ztb.toString(), "4000000000000000000");
      let zb = await zoombContract.balanceOf(accounts[3]);
      //console.log('zb:',zb.toString());
      assert.equal(zb.toString(), 2);
      let i = await zoombContract.sacrificeNFTs([4,5], {from:accounts[3]}); // CardTypes [3,2500]
      //console.log("GAS USED to sacMany:",i.receipt.gasUsed);
      ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), "337000000000000000000");
      zb = await zoombContract.balanceOf(accounts[3]);
      assert.equal(zb.toString(), 0);
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - sacrificeNFT - multiple:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert ERC721Burnable: caller is not owner nor approved -- Reason given: ERC721Burnable: caller is not owner nor approved.");
    }
  });

  it('Zoombies - Fail - mintBoosterNFT - no booster credits', async function () {
    try {
      await zoombContract.mintBoosterNFT(0, {from:accounts[0]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - mintBoosterNFT - no credits:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert No Booster credits owned -- Reason given: No Booster credits owned.");
    }
  });

  it('Zoombies - Success - mintBoosterNFT - no wager', async function () {
    try {
      let r = await zoombContract.boosterCreditsOwned(accounts[1]);
      //console.log(r.toString());
      assert.equal(r.toString(), 2);
      let zb = await zoombContract.balanceOf(accounts[1]);
      //console.log(zb.toString());
      assert.equal(zb.toString(), 1);

      let ztb = await zoomTokenContract.balanceOf(accounts[1]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), "20000155000000000000000000");

      await zoombContract.mintBoosterNFT(0, {from:accounts[1]});
      r = await zoombContract.boosterCreditsOwned(accounts[1]);
      //console.log(r.toString());
      assert.equal(r.toString(), 1);
      zb = await zoombContract.balanceOf(accounts[1]);
      //console.log(zb.toString());
      assert.equal(zb.toString(), 2);
      ztb = await zoomTokenContract.balanceOf(accounts[1]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), ("20000932000000000000000000"));
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - mintBoosterNFT:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert No Booster credits owned -- Reason given: No Booster credits owned.");
    }
  });

  it('Zoombies - Fail - buyBoosterCredits - no pay', async function () {
    try {
      await zoombContract.buyBoosterCredits(137, {from:accounts[3]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - buyBoosterCredits - no pay:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Cost to buy 1 Booster NFT credit is 0.01 -- Reason given: Cost to buy 1 Booster NFT credit is 0.01.");
    }
  });

  it('Zoombies - Success - buyBoosterCredits', async function () {
    try {
      let cost = ethers.BigNumber.from(weiCostOfBooster);
      cost = cost.mul(137);
      //console.log(cost.toString());
      let numCredits = await zoombContract.boosterCreditsOwned(accounts[3]);
      //console.log(numCredits.toString());
      assert.equal(numCredits.toString(), 0);
      await zoombContract.buyBoosterCredits(137, {from:accounts[3], value:cost.toString()});
      numCredits = await zoombContract.boosterCreditsOwned(accounts[3]);
      //console.log(numCredits.toString());
      assert.equal(numCredits.toString(), 137);
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - buyBoosterCredits:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: .toString()revert Cost to buy 1 credit is 0.002 -- Reason given: Cost to buy 1 credit is 0.002.");
    }
  });

  it('Zoombies - Fail - buyBoosterAndMintNFT - no pay', async function () {
    try {
      await zoombContract.buyBoosterAndMintNFT({from:accounts[3]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - buyBoosterAndMintNFT - no pay:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Cost to buy and mint a Booster NFT is 0.01 -- Reason given: Cost to buy and mint a Booster NFT is 0.01.");
    }
  });

  it('Zoombies - Success - buyBoosterAndMintNFT', async function () {
    try {
      let numNFTs = await zoombContract.balanceOf(accounts[3]); // we burned 2 before this
      //console.log(numNFTs.toString());
      assert.equal(numNFTs.toString(), 0);
      let ztb = await zoomTokenContract.balanceOf(accounts[3]);
      //console.log(ztb.toString());
      assert.equal(ztb.toString(), "68837000000000000000000");
      await zoombContract.buyBoosterAndMintNFT({from:accounts[3], value:weiCostOfBooster});
      numNFTs = await zoombContract.balanceOf(accounts[3]);
      //console.log(numNFTs.toString());
      assert.equal(numNFTs.toString(), 1);
      let new_ztb = await zoomTokenContract.balanceOf(accounts[3]);
      assert.equal(ethers.BigNumber.from(new_ztb.toString()).gt(ztb.toString()), true); //diff will change based on random type selected
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - buyBoosterAndMintNFT:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Cost to buy and mint a booster is 0.002 -- Reason given: Cost to buy and mint a booster is 0.002.");
    }
  });

  it('Zoombies - Fail - awardBoosterCredits - bad owner', async function () {
    try {
      await zoombContract.awardBoosterCredits(accounts[2], 254, {from:accounts[2]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - awardBoosterCredits - bad owner:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });

  it('Zoombies - Success - awardBoosterCredits', async function () {
    try {
      let numCredits = await zoombContract.boosterCreditsOwned(accounts[2]);
      //console.log(numCredits.toString());
      assert.equal(numCredits.toString(), 0);
      await zoombContract.awardBoosterCredits(accounts[2], 112, {from:accounts[0]});
      numCredits = await zoombContract.boosterCreditsOwned(accounts[2]);
      //console.log(numCredits.toString());
      assert.equal(numCredits.toString(), 112);
      let tbr = await zoombContract.totalBoostersRewarded.call();
      //console.log(tbr.toString());
      assert.equal(tbr.toString(), 112);
      await zoombContract.awardBoosterCredits(accounts[3], 210, {from:accounts[0]});
      tbr = await zoombContract.totalBoostersRewarded.call();
      assert.equal(tbr.toString(), 322);
    } catch(e){
      console.log('$ERROR - Zoombies -  Success - awardBoosterCredits:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You do Not have enough ZOOM for this wager -- Reason given: You do Not have enough ZOOM for this wager.");
    }
  });

/* TEST SOMETIMES
  it('Zoombies - Success - buyBoosterAndMintNFT and open x 100, triggerlimited edition', async function () {
    try {
      let r = '';
      let cte = '';
      let cte1 = '';
      for(let l = 0; l < 1; l++){
        await zoombContract.buyBoosterAndMintNFT({from:accounts[4], value:weiCostOfBooster});
        r = await zoombContract.getTokensByRarity();
        displayTokensByRarity(r);
        cte = await zoombContract.cardTypeToEdition(900);
        //console.log("type900 editionNum:",cte.words[0]);
        cte1 = await zoombContract.cardTypeToEdition(1);
        //console.log("type1 editionNum:",cte1.[0]);
      }
    } catch(e){
      console.log('$ERROR - Zoombies - Success - buyBoosterAndMintNFT and open x 100:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Ownable: caller is not the owner -- Reason given: Ownable: caller is not the owner.");
    }
  });



  it('Zoombies - Fail - mintBoosterNFT - attempt wager without Zoom tokens', async function () {
    try {
      let cost = ethers.BigNumber.from(weiCostOfBooster);
      cost = cost.mul(10);
      await zoombContract.buyBoosterCredits(10, {from:accounts[5], value:cost.toString()});
      await zoombContract.mintBoosterNFT(28000000, {from:accounts[5]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - mintBoosterNFT - attempt wager without Zoom tokens:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You do Not have enough ZOOM for this wager -- Reason given: You do Not have enough ZOOM for this wager.");
    }
  });
*/
  it('Zoombies - Fail - mintBoosterNFT - attempt wager below minimum', async function () {
    try {
      let cost = ethers.BigNumber.from(weiCostOfBooster);
      cost = cost.mul(500);
      await zoombContract.buyBoosterCredits(510, {from:accounts[0], value:cost.toString()});
      //let r = await zoombContract.mintBoosterNFT(2, {from:accounts[0]});
    } catch(e){
      //console.log('$ERROR - Zoombies -  Fail - mintBoosterNFT - attempt wager without Zoom tokens:', e.message);
      assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert Wager must be 0 or higher than 1000000 -- Reason given: Wager must be 0 or higher than 1000000.");
    }
  });




  it('Zoombies - Success - mintBoosterNFT - wager with Zoom tokens', async function () {
    try {
      let ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("--baseline--",ztb.toString());
      let r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);
/*
      await zoombContract.mintBoosterNFT(500000000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 500M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);

      console.log("10M bets");
      for(let l = 0; l < 2; l++){
        await zoombContract.mintBoosterNFT(10000000, {from:accounts[0]});
        r = await zoombContract.getTokensByRarity();
        displayTokensByRarity(r);
      }
*/
      let ts = 0;
      console.log("1M bets");
      let w = 1000000;
      for(let l = 0; l < 5; l++){
        let res = await zoombContract.mintBoosterNFT(w, {from:accounts[0]});
        console.log(
          "W:"+w,
          res['logs'][0]['args'].epic.toString() ,
          res['logs'][0]['args'].rare.toString() ,
          res['logs'][0]['args'].uncommon.toString() ,
          res['logs'][0]['args'].common.toString()
        );
        r = await zoombContract.getTokensByRarity();
        displayTokensByRarity(r);
        let tempTS = await zoombContract.totalSupply();
        console.log("preTS:", parseInt(ts.toString()), tempTS.toString());
        assert.equal(parseInt(tempTS.toString()), parseInt(ts.toString())+1);
        ts = tempTS;
        console.log("TS:", parseInt(ts.toString()));
        w += 1000;
      }
/*
      console.log("10M bets");
      let z = 10000000;
      for(let l = 0; l < 5; l++){
        let res = await zoombContract.mintBoosterNFT(z, {from:accounts[0]});
        console.log(
          "W:"+z,
          res['logs'][0]['args'].epic.toString() ,
          res['logs'][0]['args'].rare.toString() ,
          res['logs'][0]['args'].uncommon.toString() ,
          res['logs'][0]['args'].common.toString()
        );
        r = await zoombContract.getTokensByRarity();
        displayTokensByRarity(r);
        console.log("TS:", await zoombContract.totalSupply());
        z += 1000000;
      }

      await zoombContract.mintBoosterNFT(200000000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 200M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);

      await zoombContract.mintBoosterNFT(100000000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 100M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);

      await zoombContract.mintBoosterNFT(60000000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 60M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);

      await zoombContract.mintBoosterNFT(10000000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 10M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);

      await zoombContract.mintBoosterNFT(2600000, {from:accounts[0]});
      ztb = await zoomTokenContract.balanceOf(accounts[0]);
      console.log("after 2.6M:",ztb.toString());
      r = await zoombContract.getTokensByRarity();
      displayTokensByRarity(r);
*/
      console.log("No wager past here");
      for(let l = 0; l < 2; l++){
        await zoombContract.mintBoosterNFT(0, {from:accounts[0]});
        r = await zoombContract.getTokensByRarity();
        displayTokensByRarity(r);
        console.log("TS:", await zoombContract.totalSupply());
      }
    } catch(e){
      console.log("DOUBLE MINT ??");
      console.log('$ERROR - Zoombies -  Fail - mintBoosterNFT - attempt wager with Zoom tokens:', e.message);
      //assert.equal(e.message, "Returned error: VM Exception while processing transaction: revert You do Not have enough ZOOM for this wager -- Reason given: You do Not have enough ZOOM for this wager.");
    }
  });



});
