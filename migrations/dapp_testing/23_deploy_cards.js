const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


      await instance.loadNewCardType(126,"Lydia","Misfits 1",1,1,4,4,"0","2","475808528","475808373",76);
       console.log("126 loaded");
        //BOOSTER
      await instance.loadNewCardType(127,"Fillmore Graves","Misfits 1",1,1,5,0,"0","2","2769","2651",24);
       console.log("127 loaded");
        //BOOSTER
      await instance.loadNewCardType(128,"Skippy","Classic 1",1,1,6,0,"0","2","410","258",16);
       console.log("128 loaded");
        //BOOSTER
      await instance.loadNewCardType(129,"Weeping Angel","Medieval 1",1,1,5,0,"0","2","5821","5802",27);
       console.log("129 loaded");
        //BOOSTER
      await instance.loadNewCardType(130,"Dr. Sutchers","Domestic 1",1,1,6,0,"0","2","16545","16374",32);
       console.log("130 loaded");
        //BOOSTER
      await instance.loadNewCardType(131,"Doctor Forceps","Domestic 1",1,1,5,0,"0","2","714114","714080",48);
       console.log("131 loaded");
        //BOOSTER
      await instance.loadNewCardType(132,"Pitbull  Pup - Grey","Domestic 1",2,1,5,0,"0","2","4554","4441",26);
       console.log("132 loaded");
        //BOOSTER
      await instance.loadNewCardType(133,"Pumpkin","Domestic 1",2,1,5,0,"0","2","434","437",17);
       console.log("133 loaded");
        //BOOSTER
      await instance.loadNewCardType(134,"Shiver","Domestic 1",2,1,4,0,"0","2","430230","430057",45);
       console.log("134 loaded");
        //BOOSTER
      await instance.loadNewCardType(135,"Pinky","Domestic 1",2,1,6,0,"0","2","165","96",10);
       console.log("135 loaded");

};
