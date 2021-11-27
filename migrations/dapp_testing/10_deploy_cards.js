const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(45,"Thumbs Up Gravestone","Domestic 1",4,1,6,0,"0","2","129","71",4);
    console.log("45 loaded");
     //BOOSTER
   await instance.loadNewCardType(46,"Helly Jelly Donut","Domestic 1",4,1,3,0,"0","840122","1248000","1239500",28);
    console.log("46 loaded");
     //STORE
   await instance.loadNewCardType(47,"Pitbull Girl Pup","Domestic 1",2,0,4,3,"900000000000000000","1656800","2297000","1554500",26);
   await instance.setStoreRelease(47,20);
    console.log('47 released in 20 hrs');
    console.log("47 loaded");
     //BOOSTER
   await instance.loadNewCardType(48,"Brainz Skull","Domestic 1",4,1,4,0,"0","2","765","620",18);
    console.log("48 loaded");
     //BOOSTER
   await instance.loadNewCardType(49,"Femur","Domestic 1",2,1,5,0,"0","2","309","97",7);
    console.log("49 loaded");
     //BOOSTER
   await instance.loadNewCardType(50,"Blue Gnomes","Domestic 1",4,1,5,45,"0","2","223878","223795",43);
    console.log("50 loaded");

};
