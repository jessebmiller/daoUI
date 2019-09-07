const NaiveStateDAO = artifacts.require("NaiveStateDAO")

module.exports = function(deployer) {
  deployer.deploy(NaiveStateDAO)
}
