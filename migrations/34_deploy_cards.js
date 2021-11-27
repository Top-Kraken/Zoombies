const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
await instance.loadNewCardType(225,"Baobab Tree - Green","Exotics 1",3,1,6,0,"0","2","1551","1424",22);
 console.log("225 loaded");
  //BOOSTER
await instance.loadNewCardType(226,"Bloody Horrors Baobab Tree","Exotics 1",3,1,5,0,"0","2","4483","4481",26);
 console.log("226 loaded");
  //BOOSTER
await instance.loadNewCardType(227,"Wheezing Walter","Classic 1",1,1,5,0,"0","2","19653","19659",32);
 console.log("227 loaded");
  //BOOSTER
await instance.loadNewCardType(228,"Horrorland Sign","Classic 1",4,1,3,0,"0","2","462536","462376",44);
 console.log("228 loaded");
  //BOOSTER
await instance.loadNewCardType(229,"Dark Waters Witch Mermaid","Aquatic 2",2,1,5,0,"0","2","47796","47738",36);
 console.log("229 loaded");
  //BOOSTER
await instance.loadNewCardType(230,"Saw Nosed Shark","Aquatic 2",2,1,5,0,"0","8200","93270","93230",39);
 console.log("230 loaded");
  //BOOSTER
await instance.loadNewCardType(231,"Bloody Horrors Chihuahua","Domestic 2",2,1,4,0,"0","2","892642","892606",48);
 console.log("231 loaded");
  //BOOSTER
await instance.loadNewCardType(232,"Masked Horror Bat","Zombie Zoo 1",2,1,3,3,"0","200000","68414123","68414130",66);
 console.log("232 loaded");
  //BOOSTER
await instance.loadNewCardType(233,"Cemetery Pet Panda","Zombie Zoo 1",2,1,5,0,"0","2","9781","9733",29);
 console.log("233 loaded");
  //BOOSTER
await instance.loadNewCardType(234,"Orange Elephant","Zombie Zoo 2",2,1,6,65,"0","1023","77744","77711",39);
 console.log("234 loaded");
  //BOOSTER
await instance.loadNewCardType(235,"Mrs. Cockroach","Zombie Zoo 2",2,1,5,0,"0","2","30726","30630",34);
 console.log("235 loaded");
  //BOOSTER
await instance.loadNewCardType(236,"Pink Elephant","Zombie Zoo 2",2,1,4,8,"0","123876","20620751","20620619",61);
 console.log("236 loaded");
  //BOOSTER
await instance.loadNewCardType(237,"Dead Skito","Camping",4,1,6,0,"0","2","194","91",6);
 console.log("237 loaded");
  //BOOSTER
await instance.loadNewCardType(238,"Weeping Spook Tree - Frozen","Winter is Coming",3,1,4,0,"0","2","279748","279744",43);

};
