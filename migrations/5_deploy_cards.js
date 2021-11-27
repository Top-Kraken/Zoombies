const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
          await instance.loadNewCardType(13,"Clara Voyance","Classic 1",1,1,5,0,"0","2","312","304",16);
           console.log("13 loaded");
            //STORE - FREE
          await instance.loadNewCardType(14,"Thorny Limb Vine","Classic 1",3,0,5,56,"0","11","311","12300",9);
          await instance.setStoreRelease(14,12);
           console.log('14 released in 12 hrs');
           console.log("14 loaded");
            //BOOSTER
          await instance.loadNewCardType(15,"Newly-Deads","Classic 1",1,1,5,0,"0","2","304","158",11);
           console.log("15 loaded");
            //BOOSTER
          await instance.loadNewCardType(16,"Caretaker","Classic 1",1,1,5,0,"0","2","302","136",12);
           console.log("16 loaded");
            //BOOSTER
          await instance.loadNewCardType(17,"Skull Guardian - Green","Classic 1",3,1,2,20,"0","200","13800","9500",13);
           console.log("17 loaded");
            //BOOSTER
          await instance.loadNewCardType(18,"Iron Maiden - Purple","Medieval 1",4,1,5,0,"0","2","2156","2131",23);
           console.log("18 loaded");
            //BOOSTER
          await instance.loadNewCardType(19,"Raging Pod Lily - Purple","Fairy Tale 1",1,1,6,0,"0","2","183","161",9);
           console.log("19 loaded");

};
