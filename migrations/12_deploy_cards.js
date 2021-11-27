const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  await instance.loadNewCardType(57,"Snow White","Fairy Tale 1",1,1,4,6,"0","2","3051599","3051514",53);
   console.log("57 loaded");
    //BOOSTER
  await instance.loadNewCardType(58,"White Heat Flame Fairy","Fairy Tale 1",1,1,4,0,"0","2","59713","59681",36);
   console.log("58 loaded");
    //STORE
  await instance.loadNewCardType(59,"Fairyland Grumps Tree","Fairy Tale 1",3,0,4,4,"1100000000000000000","756547","189749","116488",39);
   console.log("59 loaded");
    //BOOSTER
  await instance.loadNewCardType(60,"Shadow Spirit - Purple","Fairy Tale 1",1,1,5,0,"0","2","314","158",12);
   console.log("60 loaded");
    //STORE
  await instance.loadNewCardType(61,"Red Sourberry Blossom","Fairy Tale 1",3,0,5,102,"80000000000000000","109","695","175",14);
   console.log("61 loaded");
    //BOOSTER
  await instance.loadNewCardType(62,"Goth Beanstalk Vine","Fairy Tale 1",3,1,5,0,"0","2","272","117",11);
   console.log("62 loaded");

};
