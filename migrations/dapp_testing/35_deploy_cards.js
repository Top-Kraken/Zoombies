const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //cleanup some people
  await instance.awardBoosterCredits("0x9D60bd851A86C5b423353b6383c944be90837DAa", 50);
  await instance.awardBoosterCredits("0x76322F53b91Cb8849dfB2007eD862940934B3520", 50);
  //BOOSTER
        await instance.loadNewCardType(239,"X-Ray Dragon","Mystical 1",2,1,3,2,"0","2","3013849","3013820",52);
         console.log("239 loaded");
          //BOOSTER
        await instance.loadNewCardType(240,"Bleeding Fury Tree","Mystical 1",3,1,6,0,"0","2","32004","31877",35);
         console.log("240 loaded");
          //BOOSTER
        await instance.loadNewCardType(241,"Bloody Boneyard Bat","Cemetery Pets",2,1,5,0,"0","2","93305","93231",39);
         console.log("241 loaded");
          //BOOSTER
        await instance.loadNewCardType(242,"Dead Cold Fairyland Grumps Tree","Winter is Coming",3,1,5,0,"0","2","144594","144395",41);
         console.log("242 loaded");
          //BOOSTER
        await instance.loadNewCardType(243,"Pop Star Zombie","Pop Culture 1",1,1,4,0,"0","2","1205093","1204961",49);
         console.log("243 loaded");
          //BOOSTER
        await instance.loadNewCardType(244,"Frozen Firefly Tree","Winter is Coming",3,1,6,0,"0","2","595116","595103",48);
         console.log("244 loaded");
          //BOOSTER
        await instance.loadNewCardType(245,"Zombie Gummy Bear","Food Frenzy",4,1,6,0,"0","2","295","100",9);
         console.log("245 loaded");
          //BOOSTER
        await instance.loadNewCardType(246,"Icy Cheeks","Food Frenzy",1,1,6,99,"0","2","895","861",20);
         console.log("246 loaded");
          //BOOSTER
        await instance.loadNewCardType(247,"Masked Spook Girl","Misfits 1",1,1,5,0,"0","2","587","528",18);
         console.log("247 loaded");
          //BOOSTER
        await instance.loadNewCardType(248,"Halloween Beanstalk Vine","Halloween",3,1,5,10,"0","2","223987","223843",43);
         console.log("248 loaded");
          //BOOSTER
        await instance.loadNewCardType(249,"Ocean of Horrors Octopus","Ocean of Horrors",2,1,4,0,"0","2","346841","346854",44);
         console.log("249 loaded");
          //BOOSTER
        await instance.loadNewCardType(250,"Black Frost Tubula","Ocean of Horrors",3,1,5,0,"0","2","93394","93206",39);
         console.log("250 loaded");
          //BOOSTER
        await instance.loadNewCardType(251,"Black Frost Fish","Ocean of Horrors",2,1,6,50,"0","2","595137","595095",48);
         console.log("251 loaded");
          //BOOSTER
        await instance.loadNewCardType(252,"Black Frost Coral","Ocean of Horrors",2,1,6,0,"0","2","267","145",11);
         console.log("252 loaded");
          //STORE
        await instance.loadNewCardType(253,"Blinding Frost Horror Nun","Winter is Coming",1,0,5,18,"7000000000000000","93767","19282","93206",39);
        await instance.setStoreRelease(253,8);
         console.log('253 released in 8 hrs');
         console.log("253 loaded");
          //STORE
        await instance.loadNewCardType(254,"Ocean of Horrors Pumpkin Patch","Ocean of Horrors",3,0,4,7,"40000000000000000","187624","47228","180513",41);
        await instance.setStoreRelease(254,24);
         console.log('254 released in 24 hrs');
         console.log("254 loaded");
          //STORE
        await instance.loadNewCardType(255,"Black Frost Mermaid","Ocean of Horrors",1,0,3,3,"600000000000000000","10809236","3603548","6755907",55);
        await instance.setStoreRelease(255,85);
         console.log('255 released in 85 hrs');
         console.log("255 loaded");
          //STORE - FREE
        await instance.loadNewCardType(256,"Radioactive Ice Candy Pie","Food Frenzy",4,0,6,25,"0","1082","828","2228",24);
        await instance.setStoreRelease(256,72);
         console.log('256 released in 72 hrs');


};
