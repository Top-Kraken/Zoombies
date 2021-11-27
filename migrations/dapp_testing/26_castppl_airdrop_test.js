const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer, network, accounts) {

  let instance = await zoombies.deployed();


      var wallets = [
        "0xB4fDb2416eEa47c2daa745b600C19644603b2285"
    ];

      for(i = 0; i < wallets.length; i++) {
        console.log( "Loading.." + wallets[i].toString() );
        await instance.awardBoosterCredits(wallets[i], 20);
        console.log(wallets[i] + " completed");
      };
};
