const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  /*
  uint16 _cardTypeId,
  string memory _name,
  string memory _set,
  uint8 _assetType,        // 1 = human, 2 = animal, 3 = plant, 4 = thing
  uint8 _notStoreOrBonus,  // 0 = inStore, 1 = booster, 2 = bonus
  uint8 _rarity,           // 1 = diamond, 6 = common
  uint16 _totalAvailable,
  uint256 _weiCost,
  uint256 _buyZoom,
  uint256 _sacrificeZoom,
  uint256 _unlockZoom,
  uint8 _cardLevel
  */

  console.log("0 loaded");
            //BOOSTER
          await instance.loadNewCardType(1,"Blue Eel","Aquatic 1",2,1,6,0,"0","777","1","82",9);
           console.log("1 loaded");
            //BOOSTER
          await instance.loadNewCardType(2,"Black Frost Snake Coral","Aquatic 1",3,1,5,0,"0","777","1","33",6);
           console.log("2 loaded");
           //BOOSTER
         await instance.loadNewCardType(6,"Walrus","Aquatic 1",2,1,4,0,"0","777","1","336",13);
          console.log("6 loaded");
           //BOOSTER
         await instance.loadNewCardType(7,"Crystal Frost Mermaid","Aquatic 1",1,1,3,0,"0","777","1104","68735154",60);
          console.log("7 loaded");

          //LIMITED edition BOOSTER
        await instance.loadNewCardType(900,"LEB","Classic 1",1,1,6,4,"0","777","1104","68735154",60);
         console.log("900 loaded");

         //LIMITED edition BOOSTER
       await instance.loadNewCardType(20,"Black Frost Snake LEB","Aquatic 1",3,1,5,4,"0","777","1","33",6);
        console.log("2 loaded");
        //LIMITED edition BOOSTER
      await instance.loadNewCardType(60,"WalrusLEB","Aquatic 1",2,1,4,4,"0","777","1","336",13);
       console.log("6 loaded");
        //LIMITED edition BOOSTER
      await instance.loadNewCardType(70,"Crystal Frost MermaidLEB","Aquatic 1",1,1,3,4,"0","777","1104","68735154",60);
       console.log("7 loaded");


            //STORE
          await instance.loadNewCardType(3,"Pink Dwarf Squid","Aquatic 1",2,0,6,330,"4500000000000000","2","111","1000000",2);
           console.log("3 loaded");
            //STORE
          await instance.loadNewCardType(4,"Green Ghostfish","Aquatic 1",2,0,4,18,"340000000000000000","198330","1622","3569914",48);
           console.log("4 loaded");
           //STORE
         await instance.loadNewCardType(8,"Zombie Jim","Classic 1",1,0,6,300,"2000000000000000","2","1","0",1);
          console.log("8 loaded");

            //STORE - FREE
          await instance.loadNewCardType(5,"Scuba Stu","Aquatic 1",1,0,5,111,"0","18","134","0",16);
           console.log("5 loaded");

           //STORE - FREE
         await instance.loadNewCardType(50,"Delayed testing","Aquatic 1",1,0,5,111,"0","18","134","0",16);
          console.log("50 loaded");

          await instance.setStoreRelease(50,20);
          console.log("card 50 delayed for 20 hrs");


           //BONUS card
           await instance.loadNewCardType(1001,"Platinum card","Classic 1",1,2,2,0,"0","2","1","0",1);
            console.log("1001 Platinum loaded");

            //BONUS card
            await instance.loadNewCardType(1002,"Platinum card","Classic 1",1,2,2,1,"0","2","1","0",1);
             console.log("1002 Platinum loaded");

             //BONUS card
        //     await instance.loadNewCardType(1003,"Platinum card","Classic 1",1,2,2,1,"0","2","1","0",1);
        //      console.log("1003 Platinum loaded");


           //STORE - FREE
         await instance.loadNewCardType(2500,"Free with zoom unlock","Classic 1",1,0,6,1,"0","2","222","1352",1);
          console.log("2500 loaded");

           //STORE - FREE
         await instance.loadNewCardType(3000,"Only1","Classic 1",1,0,6,1,"0","2","134","0",1);
          console.log("3000 loaded");

          //STORE
        await instance.loadNewCardType(4000,"Only 1","Classic 1",1,0,6,1,"2000000000000000","2","1","0",1);
         console.log("4000 loaded");

};
