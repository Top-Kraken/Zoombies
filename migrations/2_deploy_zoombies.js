const zoombies = artifacts.require("Zoombies");
const zoomToken = artifacts.require("ZoomToken");

module.exports = async function (deployer) {
  await deployer.deploy(zoomToken);
  let zToken = await zoomToken.deployed();

  await deployer.deploy(zoombies, zToken.address);
  let zContract = await zoombies.deployed();

  await zToken.setZoombiesContract(zContract.address);

};
