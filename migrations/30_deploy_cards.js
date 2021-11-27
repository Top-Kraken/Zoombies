const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();
/*
  //STORE
  await instance.loadNewCardType(202,"Masked Spook Pet","Misfits 1",2,0,4,4,"770000000000000000","90819622","22705467","51310627",66);
  await instance.setStoreRelease(202,12);
   console.log('202 released in 12 hrs');
   console.log("202 loaded");
    //STORE
  await instance.loadNewCardType(203,"Zombified Chipmunk","Camping",2,0,5,16,"20000000000000000","2489935","498503","2441257",53);
  await instance.setStoreRelease(203,5);
   console.log('203 released in 5 hrs');
   console.log("203 loaded");
    //STORE
  await instance.loadNewCardType(204,"Bloody Tent","Camping",4,0,6,44,"29000000000000000","63878","11187","62199",38);
  await instance.setStoreRelease(204,3);
   console.log('204 released in 3 hrs');
   console.log("204 loaded");
*/    //STORE
  await instance.loadNewCardType(205,"Campfire Mice","Camping",2,0,5,10,"30000000000000000","184333","37371","179048",42);
  await instance.setStoreRelease(205,18);
   console.log('205 released in 18 hrs');
   console.log("205 loaded");
    //STORE
  await instance.loadNewCardType(206,"Brown Lemur","Zombie Zoo 2",2,0,4,2,"500000000000000000","4860","1865","3338",24);
  await instance.setStoreRelease(206,39);
   console.log('206 released in 39 hrs');

};
