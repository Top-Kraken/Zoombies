const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(80,"Thorny Chain Tree - Midnight","Mystical 1",3,1,4,4,"0","212","4458","4292",25);
           console.log("80 loaded");
            //BOOSTER
          await instance.loadNewCardType(81,"Pocket Wraith - Blue","Mystical 1",4,1,5,0,"0","99","192","108",12);
           console.log("81 loaded");
            //BOOSTER
          await instance.loadNewCardType(82,"Bloody Horrors Mistress","Mystical 1",1,1,4,3,"0","32987","59768","59691",36);
           console.log("82 loaded");
            //BOOSTER
          await instance.loadNewCardType(83,"Radioactive Rainbow Hemp","Mystical 1",3,1,5,0,"0","174","219","198",13);
           console.log("83 loaded");
            //STORE
          await instance.loadNewCardType(84,"Cool Flame Japanese Cherry Tree","Mystical 1",3,0,5,13,"400000000000000000","291","730","311",16);
          await instance.setStoreRelease(84,8);
           console.log('84 released in 8 hrs');
           console.log("84 loaded");

};
