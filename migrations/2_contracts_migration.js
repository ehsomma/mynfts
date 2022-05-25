const NatalArtist = artifacts.require("NatalArtist");

module.exports = function (deployer) {
    deployer.deploy(NatalArtist, "Natal Artist", "NATART");
};
