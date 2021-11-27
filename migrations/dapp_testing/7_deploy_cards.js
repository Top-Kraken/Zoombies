const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(27,"Bloody Horrors Ambulance","Medical",4,1,5,0,"0","2","7649","7499",28);
   console.log("27 loaded");
    //BOOSTER
  await instance.loadNewCardType(28,"Bloody Horrors Brain Basin","Medical",4,1,6,0,"0","2","275","142",12);
   console.log("28 loaded");
    //BOOSTER
  await instance.loadNewCardType(29,"Zombie Foot","Classic 1",4,1,6,0,"0","2","819","584",19);
   console.log("29 loaded");
    //BOOSTER
  await instance.loadNewCardType(30,"Zombie Hand","Classic 1",4,1,5,0,"0","2","9746","9675",29);
   console.log("30 loaded");
    //BOOSTER
  await instance.loadNewCardType(31,"Zombie Finger","Classic 1",4,1,6,0,"0","2","1020","871",20);
   console.log("31 loaded");
    //STORE
  await instance.loadNewCardType(32,"Blue Eel","Aquatic 1",2,0,6,65,"45000000000000000","5","612","1180",2);
  await instance.setStoreRelease(32,3);
   console.log('32 released in 3 hrs');
   console.log("32 loaded");

};
