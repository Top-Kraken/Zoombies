const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //STORE
await instance.loadNewCardType(112,"Sweet Pumpkin Dark Pony ","Autumn Shivers",2,0,3,2,"1800000000000000000","3216971","19262626","29374001",66);
await instance.setStoreRelease(112,14);
 console.log('112 released in 14 hrs');
 console.log("112 loaded");
  //STORE
await instance.loadNewCardType(113,"Pumpkin Spice Latte Tree","Autumn Shivers",3,0,5,10,"37000000000000000","7","552","117",3);
await instance.setStoreRelease(113,2);
 console.log('113 released in 2 hrs');
 console.log("113 loaded");
  //STORE - FREE
await instance.loadNewCardType(114,"Miss Fallen Leaves","Autumn Shivers",1,0,4,5,"900000000000000000","311185","1830510","22038110",62);
await instance.setStoreRelease(114,40);
 console.log('114 released in 40 hrs');
 console.log("114 loaded");
  //STORE
await instance.loadNewCardType(115,"Pumpkin Spice  Fairy","Autumn Shivers",2,0,4,6,"110000000000000000","603","510","658",18);
await instance.setStoreRelease(115,4);
 console.log('115 released in 4 hrs');
};
