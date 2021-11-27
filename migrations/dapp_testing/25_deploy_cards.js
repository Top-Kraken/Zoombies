const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


  //STORE - FREE
       await instance.loadNewCardType(146,"Elephant","Zombie Zoo 1",2,0,5,9,"0","5","622","152",4);
       await instance.setStoreRelease(146,30);
        console.log('146 released in 30 hrs');
        console.log("146 loaded");
         //STORE
       await instance.loadNewCardType(147,"Cemetery Pet Wolf","Zombie Zoo 1",2,0,5,12,"8999999999999999","634","666","732",19);
       await instance.setStoreRelease(147,2);
        console.log('147 released in 2 hrs');
        console.log("147 loaded");
         //STORE - FREE
       await instance.loadNewCardType(148,"Goth Stripe Bunny","Cemetery Pets",2,0,4,8,"0","7814","2327","15699",30);
       await instance.setStoreRelease(148,18);
        console.log('148 released in 18 hrs');
        console.log("148 loaded");
         //STORE
       await instance.loadNewCardType(149,"Baby Girl Yeti - White","Cemetery Pets",1,0,5,15,"70000000000000008","7916","2148","7539",28);
       await instance.setStoreRelease(149,32);
        console.log('149 released in 32 hrs');
        console.log("149 loaded");
         //STORE
       await instance.loadNewCardType(150,"Mango Cotton Candy Pixie ","Food Frenzy",1,0,4,4,"90000000000000000","5522845","1381245","5066888",55);
       await instance.setStoreRelease(150,2);
        console.log('150 released in 2 hrs');
        console.log("150 loaded");
         //STORE
       await instance.loadNewCardType(151,"Red Cranberry Harvest Tree","Food Frenzy",3,0,4,7,"70000000000000008","621071","155834","580529",46);
       await instance.setStoreRelease(151,12);
        console.log('151 released in 12 hrs');
        console.log("151 loaded");
         //STORE
       await instance.loadNewCardType(152,"Narhwal","Aquatic 1",2,0,3,2,"1000000000000000000","6858489","55286464","180129379",88);
       await instance.setStoreRelease(152,55);
        console.log('152 released in 55 hrs');
        console.log("152 loaded");
         //STORE
       await instance.loadNewCardType(153,"Zombee","Domestic 1",2,0,5,16,"90000000000000000","5434479","1087518","4985876",56);
       await instance.setStoreRelease(153,4);
        console.log('153 released in 4 hrs');
        console.log("153 loaded");
         //STORE
       await instance.loadNewCardType(154,"Scare Bear - Stormy","Domestic 1",2,0,5,10,"120000000000000000","644891","129303","575887",47);
       await instance.setStoreRelease(154,8);
        console.log('154 released in 8 hrs');
        console.log("154 loaded");
         //STORE
       await instance.loadNewCardType(155,"Dark Hallows Magnolia Tree","Dark Hallows",3,0,3,1,"3000000000000000000","89175522","189058943","430793956",99);
       await instance.setStoreRelease(155,64);
        console.log('155 released in 64 hrs');

};
