const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  console.log("0 loaded");
     //STORE
   await instance.loadNewCardType(1,"Zombie Jim","Classic 1",1,0,6,101,"2000000000000000","3","459","96",1);
   await instance.setStoreRelease(1,4);
    console.log('1 released in 4 hrs');
    console.log("1 loaded");
     //BOOSTER
   await instance.loadNewCardType(2,"Husky White","Classic 1",2,1,6,0,"0","2","729","111",4);
    console.log("2 loaded");
     //BOOSTER
   await instance.loadNewCardType(3,"Mr. Grim","Classic 1",1,1,6,0,"0","2","263","95",7);
    console.log("3 loaded");
     //BOOSTER
   await instance.loadNewCardType(4,"Bonez McGee","Classic 1",1,1,6,0,"0","2","386","91",5);
    console.log("4 loaded");
     //BOOSTER
   await instance.loadNewCardType(5,"Office Party Drunk","Classic 1",1,1,6,0,"0","2","303","125",9);
    console.log("5 loaded");
     //STORE
   await instance.loadNewCardType(6,"Mittens","Classic 1",2,0,6,48,"50000000000000000","6","488","98",3);
   await instance.setStoreRelease(6,3);
    console.log('6 released in 3 hrs');
    console.log("6 loaded");

};
