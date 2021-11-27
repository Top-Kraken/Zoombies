const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(63,"Minotaur","Fairy Tale 1",2,1,3,3,"0","2","298426","298357",42);
   console.log("63 loaded");
    //BOOSTER
  await instance.loadNewCardType(64,"Zhurg","Misfits 1",1,1,6,99,"0","2","105","100",6);
   console.log("64 loaded");
    //STORE
  await instance.loadNewCardType(65,"Baby Cthulhu","Misfits 1",1,0,6,112,"20000000000000000","123","558","259",15);
   console.log("65 loaded");
    //BOOSTER
  await instance.loadNewCardType(66,"Undead Exorcist Freak Zombie","Misfits 1",1,1,3,0,"0","2","1507088","1506983",52);
   console.log("66 loaded");
    //BOOSTER
  await instance.loadNewCardType(67,"Lunch lady","Misfits 1",1,1,4,0,"0","2","59849","59716",36);
   console.log("67 loaded");
    //BOOSTER
  await instance.loadNewCardType(68,"Robot Emperor Zombie","Misfits 1",1,1,5,0,"0","2","368","199",14);
   console.log("68 loaded");

};
