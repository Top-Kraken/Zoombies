const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();



        //BOOSTER
      await instance.loadNewCardType(136,"Dead Lady Bug","Domestic 1",4,1,6,0,"0","2","163","99",11);
       console.log("136 loaded");
        //BOOSTER
      await instance.loadNewCardType(137,"Batty Fairyland Grumps Tree","Fairy Tale 1",3,1,5,20,"0","2","2175","2120",23);
       console.log("137 loaded");
        //BOOSTER
      await instance.loadNewCardType(138,"Raging Pod Lily - Green","Fairy Tale 1",2,1,6,0,"0","2","511","384",17);
       console.log("138 loaded");
        //BOOSTER
      await instance.loadNewCardType(139,"Firefly Tree","Fairy Tale 1",3,1,5,12,"0","2","2854","2657",24);
       console.log("139 loaded");
        //BOOSTER
      await instance.loadNewCardType(140,"Bloody Pom Pom Tree","Fairy Tale 1",3,1,6,0,"0","2","241","188",14);
       console.log("140 loaded");
        //BOOSTER
      await instance.loadNewCardType(141,"Love Potion Shrub","Fairy Tale 1",3,1,6,0,"0","2","325","144",12);
       console.log("141 loaded");
        //BOOSTER
      await instance.loadNewCardType(142,"Purple Eel","Zombie Zoo 1",1,1,5,0,"0","2","1755","1622",22);
       console.log("142 loaded");
        //BOOSTER
      await instance.loadNewCardType(143,"Grey Mummy Owl","Zombie Zoo 1",1,1,6,0,"0","2","178","149",3);
       console.log("143 loaded");
        //BOOSTER
      await instance.loadNewCardType(144,"Screaming Bat Tree","Zombie Zoo 1",1,1,6,0,"0","2","212","114",4);
       console.log("144 loaded");
        //BOOSTER
      await instance.loadNewCardType(145,"Eagle","Zombie Zoo 1",1,1,6,0,"0","2","5024","4802",27);

};
