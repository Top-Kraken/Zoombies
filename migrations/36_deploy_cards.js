const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
      await instance.loadNewCardType(257,"Bloody Stump","Camping",4,1,6,0,"0","2","1397","1340",22);
       console.log("257 loaded");
        //BOOSTER
      await instance.loadNewCardType(258,"Sleeping Bag - Blue","Camping",4,1,5,0,"0","2","15772","15694",31);
       console.log("258 loaded");
        //STORE - FREE
      await instance.loadNewCardType(259,"Pink Camo Sleeping Bag","Camping",4,0,5,15,"0","1220557","244726","2441190",53);
      await instance.setStoreRelease(259,45);
       console.log('259 released in 45 hrs');
       console.log("261 loaded");
        //BOOSTER
      await instance.loadNewCardType(262,"Baby Boy Yeti - Blue","Cemetery Pets",2,1,4,0,"0","2","279841","279746",43);
       console.log("262 loaded");
        //STORE
      await instance.loadNewCardType(263,"Baby Yeti - Grey","Cemetery Pets",2,0,5,10,"10000000000000000","225941","45656","223760",43);
      await instance.setStoreRelease(263,38);
       console.log('263 released in 38 hrs');
       console.log("263 loaded");
        //BOOSTER
      await instance.loadNewCardType(264,"Petrified Plum Pie","Food Frenzy",4,1,6,0,"0","2","49906","49787",37);
       console.log("264 loaded");
        //BOOSTER
      await instance.loadNewCardType(265,"Elephant Leaf - Spooky","Halloween",1,1,5,25,"0","2","144495","144450",41);
       console.log("265 loaded");
        //BOOSTER
      await instance.loadNewCardType(266,"Halloween Evergreen Tree","Halloween",1,1,6,65,"0","2","49893","49766",37);
       console.log("266 loaded");
      //BOOSTER
      await instance.loadNewCardType(267,"Halloween Chick","Halloween",1,1,5,20,"0","2","4053709","4053544",55);
       console.log("267 loaded");
          //BOOSTER
      await instance.loadNewCardType(268,"Skull Pumpkin","Halloween",1,1,6,50,"0","2","77717","77734",39);
       console.log("268 loaded");
        //STORE
      await instance.loadNewCardType(269,"Haunted House","Halloween",1,0,6,30,"10000000000000000","390830","65664","387060",46);
      await instance.setStoreRelease(269,19);
       console.log('269 released in 19 hrs');
       console.log("269 loaded");
        //STORE - FREE
      await instance.loadNewCardType(270,"Petrified Plum Cotton Pixie","Food Frenzy",1,0,4,6,"0","1525696","381789","3051520",53);
      await instance.setStoreRelease(270,45);
       console.log('270 released in 45 hrs');
       console.log("270 loaded");
        //STORE - FREE
      await instance.loadNewCardType(271,"Super Hero Zombie ","Super Series",1,0,3,1,"0","9896009","133253020","441992098",74);
      //await instance.setStoreRelease(271,152);
       console.log('271 released in 152 hrs');
       console.log("271 loaded");
        //STORE
      await instance.loadNewCardType(272,"Horror Ghost","Classic Horror",1,0,3,1,"4000000000000000000","25021382","8341159","5004399",54);
      await instance.setStoreRelease(272,127);
       console.log('272 released in 127 hrs');
       console.log("272 loaded");
        //STORE
      await instance.loadNewCardType(273,"Sugar Plum Dragonfly Mermaid","Garden Life",1,0,4,4,"200000000000000000","1445819","361996","1204966",49);
      await instance.setStoreRelease(273,82);
       console.log('273 released in 82 hrs');

};
