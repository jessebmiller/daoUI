const Migrations = artifacts.require("Migrations")
const NaiveStateDAO = artifacts.require("NaiveStateDAO")

module.exports = function(deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(NaiveStateDAO)
};
