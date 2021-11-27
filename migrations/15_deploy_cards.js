const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(73,"Flame Wraith","Mystical 1",1,1,6,65,"0","2","109","122",3);
         console.log("73 loaded");
          //STORE
        await instance.loadNewCardType(74,"Bloody Horrors Castle","Mystical 1",4,0,6,98,"20000000000000000","14","543","85",8);
        await instance.setStoreRelease(74,8);
         console.log('74 released in 8 hrs');
         console.log("74 loaded");
          //BOOSTER
        await instance.loadNewCardType(75,"Pink Deadly Nightshade","Mystical 1",3,1,6,0,"0","2","210","181",13);
         console.log("75 loaded");
          //STORE
        await instance.loadNewCardType(76,"Purple Rabbit","Mystical 1",2,0,6,75,"60000000000000000","18","469","102",9);
        await instance.setStoreRelease(76,12);
         console.log('76 released in 12 hrs');
         console.log("76 loaded");
          //STORE
        await instance.loadNewCardType(77,"Yellow Crystal Dewberry Box","Mystical 1",3,0,6,68,"20000000000000000","11","681","147",7);
        await instance.setStoreRelease(77,18);
         console.log('77 released in 18 hrs');
         console.log("77 loaded");
          //BOOSTER
        await instance.loadNewCardType(78,"Blue Shadows Tree","Mystical 1",3,1,3,3,"0","2","573561","573414",45);
         console.log("78 loaded");
          //BOOSTER
        await instance.loadNewCardType(79,"Bloody Horrors Flame Wraith","Mystical 1",1,1,4,8,"0","2","19656","19663",31);
         console.log("79 loaded");
};
