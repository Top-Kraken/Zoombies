const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


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
