const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

/*
  //STORE
       await instance.loadNewCardType(216,"Crystal Frost Mermaid","Winter is Coming",1,0,6,2,"2880000000000000000","484999079","80833650","124999855",72);
       await instance.setStoreRelease(216,80);
        console.log('216 released in 80 hrs');
        console.log("216 loaded");
         //STORE
       await instance.loadNewCardType(217,"Fundy","Autumn Shivers",1,0,4,5,"670000000000000000","115679568","28920214","69269311",67);
       await instance.setStoreRelease(217,54);
        console.log('217 released in 54 hrs');
        console.log("217 loaded");
  */       //STORE
  //STORE
   await instance.loadNewCardType(218,"Cinderella","Fairy Tale 1",1,0,3,1,"2200000000000000000","253083915","284361882","460616849",78);
   await instance.setStoreRelease(218,36);
    console.log('218 released in 36 hrs');
    console.log("218 loaded");
     //STORE
   await instance.loadNewCardType(219,"Raging Pod Lily - Pink","Fairy Tale 1",2,0,5,20,"1000000000000000","714058","143237","714130",48);
   await instance.setStoreRelease(219,42);
    console.log('219 released in 42 hrs');
    console.log("219 loaded");
     //STORE
   await instance.loadNewCardType(220,"Bernardette Slugroaster","Halloween",1,0,4,6,"140000000000000000","58493994","14624081","51310591",66);
   await instance.setStoreRelease(220,168);
    console.log('220 released in 168 hrs');
    console.log("220 loaded");
     //STORE
   await instance.loadNewCardType(221,"Albino Minotaur","Mystical 1",2,0,3,1,"6000000000000000000","251639207","283880178","856455014",77);
   await instance.setStoreRelease(221,777);
    console.log('221 released in 777 hrs');
    console.log("221 loaded");
     //STORE - FREE
   await instance.loadNewCardType(222,"Grey Rabbit","Zombie Zoo 2",2,0,5,19,"0","6251","1743","12598",30);
   await instance.setStoreRelease(222,120);
    console.log('222 released in 120 hrs');
    console.log("222 loaded");
     //STORE
   await instance.loadNewCardType(223,"Undead Sapling","Domestic 1",3,0,5,7,"2000000000000000","11198804","2240082","11176539",59);
   await instance.setStoreRelease(223,16);
    console.log('223 released in 16 hrs');
    console.log("223 loaded");
     //STORE
   await instance.loadNewCardType(224,"Blue Elephant Leaf","Zombie Zoo 1",3,0,6,18,"6000000000000000","2940439","1157262","6899117",58);
   await instance.setStoreRelease(224,29);
    console.log('224 released in 29 hrs');

};
