const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(18,"Iron Maiden - Purple","Medieval 1",4,1,5,0,"0","2","2156","2131",23);
   console.log("18 loaded");
    //BOOSTER
  await instance.loadNewCardType(19,"Raging Pod Lily - Purple","Fairy Tale 1",1,1,6,0,"0","2","183","161",9);
   console.log("19 loaded");

  await instance.loadNewCardType(20,"VooDoo Vine - Orange","Fairy Tale 1",1,1,6,0,"0","2","597","450",18);
     console.log("20 loaded");
      //BOOSTER
    await instance.loadNewCardType(21,"Zombified Chipmunk Girl","Summer Camp",2,1,6,0,"0","2","25598","25575",34);
     console.log("21 loaded");
      //BOOSTER
    await instance.loadNewCardType(22,"Campfire Mice","Summer Camp",2,1,6,0,"0","2","10631","10501",30);
     console.log("22 loaded");
      //BOOSTER
    await instance.loadNewCardType(23,"Angry Badger","Summer Camp",2,1,5,0,"0","2","59708","59711",37);
     console.log("23 loaded");
      //BOOSTER
    await instance.loadNewCardType(24,"Bloody Canoe","Summer Camp",4,1,6,0,"0","2","8144","8122",29);
     console.log("24 loaded");
      //BOOSTER
    await instance.loadNewCardType(25,"Bloody Tent","Summer Camp",4,1,6,0,"0","2","6266","6267",28);
     console.log("25 loaded");
      //STORE
    await instance.loadNewCardType(26,"Zombified Chipmunk","Summer Camp",2,0,4,10,"300000000000000000","983158","197171","963939",49);
    await instance.setStoreRelease(26,22);
     console.log('26 released in 22 hrs');
     console.log("26 loaded");

};
