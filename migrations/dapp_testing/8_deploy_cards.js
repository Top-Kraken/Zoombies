const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(33,"Black Frost Snake Coral","Aquatic 1",3,1,6,0,"0","2","185","106",6);
   console.log("33 loaded");
    //BOOSTER
  await instance.loadNewCardType(34,"Pink Dwarf Squid","Aquatic 1",2,1,6,0,"0","2","189","127",2);
   console.log("34 loaded");
    //BOOSTER
  await instance.loadNewCardType(35,"Green Ghostfish","Aquatic 1",2,1,4,8,"0","2","892601","892581",48);
   console.log("35 loaded");
    //STORE - FREE
  await instance.loadNewCardType(36,"Scuba Stu","Aquatic 1",1,0,5,33,"0","105","488","26600",16);
  await instance.setStoreRelease(36,2);
   console.log('36 released in 2 hrs');
   console.log("36 loaded");
    //BOOSTER
  await instance.loadNewCardType(37,"Walrus","Aquatic 1",2,1,5,0,"0","2","282","146",13);
   console.log("37 loaded");
    //BOOSTER
  await instance.loadNewCardType(38,"Scuba Jane","Aquatic 1",1,1,5,0,"0","2","2783","2690",24);
   console.log("38 loaded");

};
