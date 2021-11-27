const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
await instance.loadNewCardType(90,"Guts R Us Store","Classic 1",4,1,2,0,"0","2","608","498",15);
 console.log("90 loaded");
  //BOOSTER
await instance.loadNewCardType(91,"Iron Maiden","Medieval 1",4,1,2,8,"0","2","6575","6579",24);
 console.log("91 loaded");
  //BOOSTER
await instance.loadNewCardType(92,"Hooded Guardian","Medieval 1",4,1,2,10,"0","2","5225","5056",23);
 console.log("92 loaded");
  //BOOSTER
await instance.loadNewCardType(93,"Mystic Fire Dragon","Mystical 1",2,1,2,3,"0","2","7506576","7506538",54);
 console.log("93 loaded");
  //BOOSTER
await instance.loadNewCardType(94,"Eyes Scream Sunday","Classic 2",4,1,2,30,"0","2","1342","1220",18);
 console.log("94 loaded");
  //BOOSTER
await instance.loadNewCardType(95,"Blart","Misfits 1",4,1,2,0,"0","2","274","120",6);
 console.log("95 loaded");
  //BOOSTER
await instance.loadNewCardType(96,"Bloody Horrors Ambulance","Medical",4,1,2,0,"0","2","261","85",4);


};
