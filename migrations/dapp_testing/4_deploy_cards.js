const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
           await instance.loadNewCardType(7,"Bodycheck Bob","Classic 1",1,1,6,0,"0","2","123","115",10);
            console.log("7 loaded");
             //STORE
           await instance.loadNewCardType(8,"Fury Tree","Classic 1",3,0,4,5,"600000000000000000","1300000","4610000","1280000",13);
           await instance.setStoreRelease(8,16);
            console.log('8 released in 16 hrs');
            console.log("8 loaded");
             //BOOSTER
           await instance.loadNewCardType(9,"Bloody Horrors Corpsecake","Classic 1",4,1,6,0,"0","2","123","140",8);
            console.log("9 loaded");
             //BOOSTER
           await instance.loadNewCardType(10,"Silent Horrors Nurse","Classic 1",1,1,3,2,"0","2","9313810","9313849",59);
            console.log("10 loaded");
             //STORE - FREE
           await instance.loadNewCardType(11,"Guts-R-Us Delivery Car","Classic 1",4,0,4,9,"0","961","5710","204200",22);
           await instance.setStoreRelease(11,10);
            console.log('11 released in 10 hrs');
            console.log("11 loaded");
             //BOOSTER
           await instance.loadNewCardType(12,"Sullen Sunflower","Classic 1",3,1,4,0,"0","2","3350","3382",24);
            console.log("12 loaded");

};
