const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
      await instance.loadNewCardType(116,"Pumpkin Spice Latte Oak Tree","Autumn Shivers",3,1,6,48,"0","2","132","92",9);
       console.log("116 loaded");
        //BOOSTER
      await instance.loadNewCardType(117,"Orange Pumpkin Spook Girl","Autumn Shivers",1,1,5,0,"0","2","574","508",18);
       console.log("117 loaded");
        //BOOSTER
      await instance.loadNewCardType(118,"Undead Pumpkin Patch","Autumn Shivers",3,1,4,0,"0","2","7240","7226",27);
       console.log("118 loaded");
        //BOOSTER
      await instance.loadNewCardType(119,"Scuba Stan","Aquatic 1",1,1,6,0,"0","2","224","128",6);
       console.log("119 loaded");
        //BOOSTER
      await instance.loadNewCardType(120,"Black Eel","Aquatic 1",2,1,5,18,"0","2","1386","1270",21);
       console.log("120 loaded");
        //BOOSTER
      await instance.loadNewCardType(121,"Sunny Fairyland Grumps Tree","Fairy Tale 2",3,1,4,8,"0","2","74788","74636",37);
       console.log("121 loaded");
        //BOOSTER
      await instance.loadNewCardType(122,"Bluebird Pie","Food Frenzy",4,1,6,0,"0","2","293","177",12);
       console.log("122 loaded");
        //BOOSTER
      await instance.loadNewCardType(123,"Frozen Fears Husky Pup","Winter is Coming",2,1,6,0,"0","2","463","272",16);
       console.log("123 loaded");
        //BOOSTER
      await instance.loadNewCardType(124,"Zombie Lady Legs Couch","Misfits 1",4,1,5,0,"0","2","2714","2725",24);
       console.log("124 loaded");
        //BOOSTER
      await instance.loadNewCardType(125,"Blue Swamp Shroom Tree","Misfits 1",3,1,4,0,"0","2","19799","19642",31);
       console.log("125 loaded");

};
