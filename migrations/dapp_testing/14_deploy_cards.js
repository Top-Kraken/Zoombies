const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

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
  //BOOSTER
  await instance.loadNewCardType(69,"Swamp Shroom","Misfits 1",1,1,5,183,"0","2","319","141",13);
   console.log("69 loaded");
    //BOOSTER
  await instance.loadNewCardType(70,"Sulk Worm Sprout","Misfits 1",1,1,5,0,"0","2","262","151",5);
   console.log("70 loaded");
    //STORE
  await instance.loadNewCardType(71,"Serpent Head Vine - Red","Misfits 1",1,0,5,91,"100000000000000000","1300","642","1315",21);
   console.log("71 loaded");
    //BOOSTER
  await instance.loadNewCardType(72,"Tiny","Misfits 1",1,1,2,0,"0","2","256","112",5);
   console.log("72 loaded");

};
