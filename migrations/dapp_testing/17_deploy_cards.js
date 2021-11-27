const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


  await instance.loadNewCardType(85,"Blue Shroom","Mystical 1",3,1,6,0,"0","88","229","105",8);
      console.log("85 loaded");
       //BOOSTER
     await instance.loadNewCardType(86,"Voodoo Donut","Mystical 1",4,1,5,0,"0","2","283","112",6);
      console.log("86 loaded");
       //STORE - FREE
     await instance.loadNewCardType(87,"Dust Bunny - Fuzzy Rainbow","Mystical 1",2,0,5,19,"0","52","627","184",14);
     await instance.setStoreRelease(87,16);
      console.log('87 released in 16 hrs');
      console.log("87 loaded");
       //BOOSTER
     await instance.loadNewCardType(88,"Dark Hallows Skull","Mystical 1",4,1,5,0,"0","67","160","85",8);
      console.log("88 loaded");
       //STORE
     await instance.loadNewCardType(89,"Darius","Mystical 1",2,0,3,1,"2400000000000000000","13276687","17595820","12450266",51);
     await instance.setStoreRelease(89,30);
      console.log('89 released in 30 hrs');

};
