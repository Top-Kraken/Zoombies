const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
       await instance.loadNewCardType(39,"Zombie Egg","Domestic 1",4,1,6,0,"0","2","129","101",4);
        console.log("39 loaded");
         //STORE - FREE
       await instance.loadNewCardType(40,"Landers","Domestic 1",2,0,6,67,"0","5","633","1540",5);
       await instance.setStoreRelease(40,2);
        console.log('40 released in 2 hrs');
        console.log("40 loaded");
         //BOOSTER
       await instance.loadNewCardType(41,"Talbott","Domestic 1",2,1,6,0,"0","2","488","372",17);
        console.log("41 loaded");
         //BOOSTER
       await instance.loadNewCardType(42,"White Rabbit","Domestic 1",2,1,6,200,"0","2","187","111",1);
        console.log("42 loaded");
         //BOOSTER
       await instance.loadNewCardType(43,"Black Crow","Domestic 1",2,1,6,0,"0","2","477","365",17);
        console.log("43 loaded");
         //STORE
       await instance.loadNewCardType(44,"Pumpkin Patch","Domestic 1",3,0,6,49,"10000000000000000","300","868","11200",11);
        console.log("44 loaded");

};
