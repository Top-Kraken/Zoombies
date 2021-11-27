const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
         await instance.loadNewCardType(97,"Aqua Ice Flamingo","Zombie Zoo 1",2,1,6,0,"0","2","196","103",7);
          console.log("97 loaded");
           //BOOSTER
         await instance.loadNewCardType(98,"Polar Bear","Zombie Zoo 1",2,1,6,0,"0","2","272","121",8);
          console.log("98 loaded");
           //BOOSTER
         await instance.loadNewCardType(99,"Bonez Donut","Domestic 1",4,1,6,60,"0","2","220","229",15);
          console.log("99 loaded");
           //BOOSTER
         await instance.loadNewCardType(100,"Zombie Girl Egg","Domestic 1",4,1,6,0,"0","2","221","122",9);
          console.log("100 loaded");
           //BOOSTER
         await instance.loadNewCardType(101,"Pink Rabbit","Domestic 1",2,1,6,0,"0","2","167","66",3);
          console.log("101 loaded");
           //BOOSTER
         await instance.loadNewCardType(102,"Sullivan","Domestic 1",2,1,6,35,"0","2","1881","1720",23);
          console.log("102 loaded");
           //BOOSTER
         await instance.loadNewCardType(103,"Deadly Nightshade","Mystical 1",1,1,6,0,"0","2","167","84",7);
          console.log("103 loaded");


};
