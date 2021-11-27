const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

           //BOOSTER
         await instance.loadNewCardType(104,"Teeny Terrors Ghoul - Pink","Spirits 1",4,1,6,0,"0","2","178","142",9);
          console.log("104 loaded");
           //BOOSTER
         await instance.loadNewCardType(105,"Zombie Robot Pet - Blue","Misfits 1",4,1,6,40,"0","2","187","118",13);
          console.log("105 loaded");
           //BOOSTER
         await instance.loadNewCardType(106,"Cosmina","Misfits 1",4,1,6,0,"0","2","258","153",6);
          console.log("106 loaded");
           //BOOSTER
         await instance.loadNewCardType(107,"Orange Voodoo Dolly","Misfits 1",4,1,6,0,"0","2","232","131",13);
          console.log("107 loaded");
           //BOOSTER
         await instance.loadNewCardType(108,"Green Eel","Aquatic 1",2,1,6,0,"0","2","132","116",7);
          console.log("108 loaded");
           //BOOSTER
         await instance.loadNewCardType(109,"Brain Coral - Blue","Aquatic 1",3,1,6,25,"0","2","25555","25504",34);
          console.log("109 loaded");
           //BOOSTER
         await instance.loadNewCardType(110,"Zombie Foot","Classic 1",4,1,6,19,"0","2","813","626",19);
          console.log("110 loaded");
           //BOOSTER
         await instance.loadNewCardType(111,"Zombie Finger","Classic 1",4,1,6,40,"0","2","946","823",20);

};
