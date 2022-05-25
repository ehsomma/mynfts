//#region Imports

// Contracts.
const NatalArtist = artifacts.require("NatalArtist");

// Chai.
const { chai, expect, BN } = require("./setupChai.js"); // Chai preconfiguration.

// Truffle assertions.
const truffleAssert = require('truffle-assertions');

// OpenZeppeling test helpers.
const {
    //BN,           // Big Number support.
    constants,      // Common constants, like the zero address and largest integers.
    expectEvent,    // Assertions for emitted events.
    expectRevert,   // Assertions for transactions that should fail.
    time,           // Block time manipulation.
} = require('@openzeppelin/test-helpers');

//#endregion

contract("natalArtistTest", async accounts => {
    //#region Declarations.

    let myNftInstance;
    let metadataCid0 = 'QmPUT5nrbfKJnSQjuudwom5Z3wdyv8u4Kiv7Xrt3jVazMu';
    let baseURI = 'https://ipfs.io/ipfs/';

    //#endregion

    //#region Hooks.

    // Runs once before the first test in this block.
    before(async function () {
        myNftInstance = await NatalArtist.deployed();
        nftAddress = myNftInstance.address;

        console.log('NFTs address: ', nftAddress);
        console.log('accounts[0]', accounts[0]);
        console.log('accounts[1]', accounts[1]);
        console.log();
    });

    //#endregion

    //#region Tests

    it("the nft collection must be initialized", async function () {
        // Arrange.

        // Act.
        const tokenName = await myNftInstance.name();
        const tokenSymbol = await myNftInstance.symbol();
        const tokenBaseURI = await myNftInstance.baseURI();

        console.log(tokenName, tokenSymbol, tokenBaseURI);
        console.log();

        // Assert.
        expect(tokenName).to.be.equal('Natal Artist');
        expect(tokenSymbol).to.be.equal('NATART');
        return expect(tokenBaseURI).to.be.equal(baseURI);
    });

    it("when minting an nft the balance of the new owner must be increased", async function () {
        // Arrange.

        // Act.
        const previowsBalance = await myNftInstance.balanceOf(accounts[0]);
        const tx = await myNftInstance.mint(accounts[0], [metadataCid0], { from: accounts[0], gas: 3000000 });
        const actualBalance = await myNftInstance.balanceOf(accounts[0]);
        
        // Assert.
        expect(previowsBalance).to.be.bignumber.equal(new BN(0));
        expect(actualBalance).to.be.bignumber.equal(new BN(1));
    });

    it("the tokenURI must be made up of the baseURI plus the IPFS hash of the metadata file", async function () {
        // Arrange.
        const tokenId = 0;
        const expectedTokenURI = `${baseURI}${metadataCid0}`;

        // Act.
        const tokenURI = await myNftInstance.tokenURI(tokenId);
        
        // Assert.
        return expect(tokenURI).to.be.equal(expectedTokenURI);
    });

    it("when trying to get a tokenURI from an unminted nft you should revert", async function () {
        // Arrange.
        const tokenId = 1000;

        // Act.
        
        // Assert.
        await truffleAssert.fails(
            myNftInstance.tokenURI(tokenId),
            truffleAssert.ErrorType.REVERT,
            'TokenId not found'
        );
    });

    it("when minting with an existing cid it should be reverted", async function () {
        // Arrange.

        // Act.
        
        // Assert.
        await truffleAssert.fails(
            myNftInstance.mint(accounts[0], [metadataCid0], { from: accounts[0], gas: 3000000 }),
            truffleAssert.ErrorType.REVERT,
            'IPFS hash already used'
        );
    });

    it("after minting the tokenIds should be in the owner's list of tokens", async function () {
        // Arrange.

        // Act.
        const tokenIds = await myNftInstance.walletOfOwner(accounts[0]);
        
        // Assert.
        expect(tokenIds.length).to.be.equal(1);
        return expect(tokenIds[0]).to.be.bignumber.equal(new BN(0));
    });

    it("should be able to change the baseURI", async function () {
        // Arrange.
        const newBaseURI = 'https://gateway.pinata.cloud/ipfs/';

        // Act.
        await myNftInstance.setBaseURI(newBaseURI, { from: accounts[0], gas: 3000000 });
        const updatedBaseURI = await myNftInstance.baseURI();
        
        // Assert.
        expect(updatedBaseURI).to.be.equal(newBaseURI);
    });

    //#endregion
});
