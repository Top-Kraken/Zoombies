const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

//  await instance.loadNewCardType(50,"Blue Gnomes","Domestic 1",4,1,5,45,"0","2","223878","223795",43);
//   console.log("50 loaded");

  await instance.loadNewCardType(51,"Pom Pom Tree Green","Fairy Tale 1",3,1,6,0,"0","2","216","140",5);
       console.log("51 loaded");
        //STORE
      await instance.loadNewCardType(52,"Sweet Dreams Tree - Blue","Fairy Tale 1",3,0,6,82,"70000000000000000","9","308","15500",6);
       console.log("52 loaded");
        //BOOSTER
      await instance.loadNewCardType(53,"Corpse Lily - Pink","Fairy Tale 1",3,1,6,0,"0","2","155","144",4);
       console.log("53 loaded");
        //BOOSTER
      await instance.loadNewCardType(54,"Bloody Horrors Pie","Fairy Tale 1",4,1,6,0,"0","2","108","134",6);
       console.log("54 loaded");
        //STORE
      await instance.loadNewCardType(55,"Thorny Chain Tree","Fairy Tale 1",3,0,6,54,"130000000000000000","140","439","730",7);
      await instance.setStoreRelease(55,4);
       console.log('55 released in 4 hrs');
       console.log("55 loaded");
        //BOOSTER
      await instance.loadNewCardType(56,"Stinging Medula","Fairy Tale 1",3,1,6,66,"0","2","280","138",8);
       console.log("56 loaded");

};
