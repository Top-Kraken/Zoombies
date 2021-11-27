const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();

  //BOOSTER
       await instance.loadNewCardType(156,"Gloom Bear","Scare Bears",2,1,4,0,"0","2","145680","145636",40);
        console.log("156 loaded");
         //BOOSTER
       await instance.loadNewCardType(157,"Baobab Tree - Winter","Winter is Coming",3,1,3,3,"0","200000","162540448","162540246",87);
        console.log("157 loaded");
         //BOOSTER
       await instance.loadNewCardType(158,"Snow Chili Swag Tree","Winter is Coming",3,1,5,0,"0","2","805","698",19);
        console.log("158 loaded");
         //BOOSTER
       await instance.loadNewCardType(159,"Zombee - Blue","Domestic 2",2,1,6,0,"0","2","1523","1399",22);
        console.log("159 loaded");
         //BOOSTER
       await instance.loadNewCardType(160,"Patriot  Zombee","Domestic 2",2,1,5,0,"0","2","19717","19617",32);
        console.log("160 loaded");
         //BOOSTER
       await instance.loadNewCardType(161,"Bloody Horrors Chihuahua Girl ","Domestic 2",2,1,4,0,"0","2","12120","12119",29);
        console.log("161 loaded");
         //BOOSTER
       await instance.loadNewCardType(162,"Bloody Horrors Husky Pup","Domestic 2",2,1,4,4,"0","89000","22341276","42341237",77);
        console.log("162 loaded");
         //BOOSTER
       await instance.loadNewCardType(163,"Pamela Pumpkins","Halloween",1,1,4,0,"0","2","59753","59662",36);
        console.log("163 loaded");
         //BOOSTER
       await instance.loadNewCardType(164,"Funster - Orange","Halloween",2,1,4,0,"0","2","346905","346867",44);
        console.log("164 loaded");
         //BOOSTER
       await instance.loadNewCardType(165,"Orange Lolly Flower","Halloween",3,1,6,0,"0","2","20576","20478",33);
        console.log("165 loaded");
         //BOOSTER
       await instance.loadNewCardType(166,"Orange Fantasy Hemp","Autumn Shivers",3,1,5,0,"0","2","19775","19635",32);
        console.log("166 loaded");
         //BOOSTER
       await instance.loadNewCardType(167,"Orange Magnolia Tree","Autumn Shivers",3,1,4,0,"0","2","430096","430013",45);
        console.log("167 loaded");
         //BOOSTER
       await instance.loadNewCardType(168,"Zombified Chipmunk Girl","Camping",2,1,4,0,"0","2","720040","719846",47);
        console.log("168 loaded");
         //BOOSTER
       await instance.loadNewCardType(169,"Angry Badger","Camping",2,1,5,0,"0","2","15779","15720",31);
        console.log("169 loaded");
         //BOOSTER
       await instance.loadNewCardType(170,"Bloody Canoe","Camping",4,1,6,0,"0","2","10546","10483",30);
        console.log("170 loaded");
         //BOOSTER
       await instance.loadNewCardType(171,"Marty","Garden Life",2,1,5,0,"0","2","134659","134650",22);
        console.log("171 loaded");
         //BOOSTER
       await instance.loadNewCardType(172,"Dark Light Dragon","Mystical 1",2,1,3,1,"0","61498049","209912751","609912644",80);
        console.log("172 loaded");
         //BOOSTER
       await instance.loadNewCardType(173,"Flaming Brain Pumpkin Patch","Mystical 1",3,1,4,0,"0","2","5066996","5066913",55);
        console.log("173 loaded");
         //BOOSTER
       await instance.loadNewCardType(174,"Bloody Fairyland Grumps Tree","Mystical 1",3,1,4,0,"0","2","279901","279718",43);
        console.log("174 loaded");
         //BOOSTER
       await instance.loadNewCardType(175,"Green Fury Tree","Mystical 1",3,1,4,0,"0","2","30724","30637",33);
        console.log("175 loaded");
         //BOOSTER
       await instance.loadNewCardType(176,"Blueberry Cotton Candy Tree","Food Frenzy",3,1,6,0,"0","2","2953","2928",25);
        console.log("176 loaded");
         //BOOSTER
       await instance.loadNewCardType(177,"Mango Cotton Candy Tree","Food Frenzy",3,1,5,0,"0","2","4520","4469",26);
        console.log("177 loaded");
         //BOOSTER
       await instance.loadNewCardType(178,"Blueberry Cotton Candy Pixie","Food Frenzy",1,1,4,0,"0","2","7283","7255",27);
        console.log("178 loaded");
         //BOOSTER
       await instance.loadNewCardType(179,"Tangerine Patch","Food Frenzy",3,1,6,0,"0","2","696","656",19);
        console.log("179 loaded");
         //BOOSTER
       await instance.loadNewCardType(180,"Brainz Cake","Food Frenzy",4,1,5,0,"0","2","1414","1277",21);
        console.log("180 loaded");
         //BOOSTER
       await instance.loadNewCardType(181,"Pink Eel","Zombie Zoo 1",2,1,6,0,"0","2","244","185",14);
        console.log("181 loaded");
         //BOOSTER
       await instance.loadNewCardType(182,"Toucan","Zombie Zoo 1",2,1,5,0,"0","2","259","130",13);
        console.log("182 loaded");
         //BOOSTER
       await instance.loadNewCardType(183,"Mr. Cockroach","Zombie Zoo 1",2,1,6,0,"0","2","292","260",16);
        console.log("183 loaded");
         //BOOSTER
       await instance.loadNewCardType(184,"Blue Elephant","Zombie Zoo 2",2,1,6,0,"0","2","279","81",9);
        console.log("184 loaded");
         //BOOSTER
       await instance.loadNewCardType(185,"Pink Blush Husky Pup","Zombie Zoo 2",2,1,6,0,"0","2","207","136",7);
        console.log("185 loaded");
         //BOOSTER
       await instance.loadNewCardType(186,"Yellow Pumpkin Patch","Zombie Zoo 2",3,1,6,0,"0","2","194","117",13);
        console.log("186 loaded");
         //BOOSTER
       await instance.loadNewCardType(187,"Deadly Nightshade","Zombie Zoo 2",3,1,6,0,"0","2","8277","8109",29);
        console.log("187 loaded");
         //BOOSTER
       await instance.loadNewCardType(188,"Blue Fury Tree","Zombie Zoo 2",3,1,5,0,"0","2","203","92",5);
        console.log("188 loaded");
         //BOOSTER
       await instance.loadNewCardType(189,"Fairyland Tree House","Zombie Zoo 2",4,1,5,0,"0","2","350","289",15);
        console.log("189 loaded");
         //BOOSTER
       await instance.loadNewCardType(190,"Bob McKenzie","Zombie Zoo 2",2,1,6,0,"0","2","1911","1780",23);
        console.log("190 loaded");
         //BOOSTER
       await instance.loadNewCardType(191,"Ashes","Domestic 1",2,1,5,0,"0","2","250","128",2);
        console.log("191 loaded");
         //BOOSTER
       await instance.loadNewCardType(192,"Blue Rabbit","Domestic 1",2,1,6,0,"0","2","2429","2225",24);
        console.log("192 loaded");
         //BOOSTER
       await instance.loadNewCardType(193,"Hershel","Domestic 1",2,1,4,0,"0","2","5623","5579",26);
        console.log("193 loaded");
         //BOOSTER
       await instance.loadNewCardType(194,"Stove of Horrors","Domestic 1",4,1,6,0,"0","2","263","149",13);
        console.log("194 loaded");
         //BOOSTER
       await instance.loadNewCardType(195,"Sink of Horrors","Domestic 1",4,1,5,0,"0","2","19629","19666",32);
        console.log("195 loaded");
         //BOOSTER
       await instance.loadNewCardType(196,"Fridge of Horrors","Domestic 1",4,1,6,0,"0","2","286","210",14);
        console.log("196 loaded");
         //BOOSTER
       await instance.loadNewCardType(197,"Marigold","Domestic 1",2,1,5,0,"0","2","59884","59668",37);
        console.log("197 loaded");
         //BOOSTER
       await instance.loadNewCardType(198,"Thorny Chain Tree - Orange","Fairy Tale 1",3,1,5,0,"0","2","5976","5772",27);
        console.log("198 loaded");
         //BOOSTER
       await instance.loadNewCardType(199,"Firefly Tree - Purple","Fairy Tale 1",3,1,6,0,"0","2","641","652",19);
        console.log("199 loaded");
         //BOOSTER
       await instance.loadNewCardType(200,"Scuba Jane","Aquatic 1",1,1,5,0,"0","2","2779","2726",24);
        console.log("200 loaded");
         //BOOSTER
       await instance.loadNewCardType(201,"Pink Swamp Shroom Tree","Misfits 1",3,1,5,0,"0","2","2804","2704",24);


};
