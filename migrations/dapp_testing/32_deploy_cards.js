const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
           await instance.loadNewCardType(207,"Gothic Cross Headstone","Medieval 1",4,1,6,0,"0","2","6448","6253",28);
            console.log("207 loaded");
             //BOOSTER
           await instance.loadNewCardType(208,"Gasping Gary","Classic 1",1,1,3,0,"0","2","298520","298339",42);
            console.log("208 loaded");
             //BOOSTER
           await instance.loadNewCardType(209,"Guts Vending Machine","Classic 1",4,1,5,18,"0","140","15610","13730",32);
            console.log("209 loaded");
             //BOOSTER
           await instance.loadNewCardType(210,"Sleepy Time Skippy","Classic 2",1,1,6,0,"0","2","6294","6261",28);
            console.log("210 loaded");
             //BOOSTER
           await instance.loadNewCardType(211,"Zombee - Pink","Domestic 1",2,1,4,0,"0","2","180563","180475",41);
            console.log("211 loaded");
             //BOOSTER
           await instance.loadNewCardType(212,"Spicy Chai Latte Tree","Food Frenzy",4,1,5,0,"0","2","15836","15724",31);
            console.log("212 loaded");
             //BOOSTER
           await instance.loadNewCardType(213,"Pizza Shrub - Green","Food Frenzy",3,1,6,0,"0","2","8181","8142",29);
            console.log("213 loaded");
             //BOOSTER
           await instance.loadNewCardType(214,"Zombie Gummy Bear - Purple","Food Frenzy",2,1,6,0,"0","2","6378","6259",28);
            console.log("214 loaded");
             //BOOSTER
           await instance.loadNewCardType(215,"Brainz Burrito Shrub","Food Frenzy",3,1,6,0,"0","2","4985","4884",27);

};
