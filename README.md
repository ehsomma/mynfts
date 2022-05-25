# MyNFTs (Natal Artists collection)

[![.github/workflows/ci.yml](https://github.com/ehsomma/mynfts/actions/workflows/mynfts.yml/badge.svg)](https://github.com/ehsomma/mynfts/actions/workflows/mynfts.yml)
[![Coverage Status](https://coveralls.io/repos/github/ehsomma/mynfts/badge.svg?branch=master)](https://coveralls.io/github/ehsomma/mynfts?branch=master)
[![Solhint](https://img.shields.io/badge/solhint-checked-success?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuElEQVR42o3SsQ3CMBCFYVNABTVNSjrEANQsxABIGQYGYAWGSJggsAT+H4VtZDtnCUuvsORPvjudk+RmgaXgKuglLaw3FloJbgIRToGBHbA2kE8o5YeBLfg33t9bP9UBOEd8AU7/IAEvwUGwSWWnQdToY6AOGFLZLk4vRw/BEZiAKUNj3rMT9PGS4Bgf7hWSflIJQ8M1HgRdC4VSw1Qt/IyZoXoBLGwia3MsPEP2ypXYRC2Y4+aSfwGpKaEjgWMgaAAAAABJRU5ErkJggg==)](https://github.com/ehsomma/mynfts/actions/workflows/mynfts.yml)
[![Slither](https://img.shields.io/badge/slither-checked-success?logoWidth=27&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAOCAYAAADez2d9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB50lEQVR42qXUTYiOURQH8Hd4x8dkFsqUZCEfZTOzMVJGFrKgfIREiaxkpexslJowTYSyIqWUsCNNUzRZKdE0G0rSFMoYjFlomlH3dy3mPm/X43nHwlO3p3vPOf//Of9z7q3FGGv/tcQWrMEunMQdjGEG73APm2KMtUYQ2nEOw5gUwhchPEB3FQlW4iI+IDZZLxNeQG8R2IE3lQEhBPRjfvJdiiuYnoOkWFMYxFOMF2Q3MoePqfShlFEUQsRDnMDXEuB79OEgurEaW/EKTyLz0ll3QfYpBY5gUSbVloZMs4QxpH9S4kBkXhOZ23EVZ9CFemEYSwDPY4wtWcAKIdwXQoMsVXsarZnfYuzAcexEW4m4H53F5m4myxB6k2wzTXpxIcW14SwmSvZx7M7IWhvTmDT9PkejR3A0gUSzX18a7dzvZ7LFlGhXXmENRxLhWjzKpmwKA9hX9AUbMVmRzAA2JJ91GE3nN8tkh7A3K3lBugqtFU3vwIsS0e0Kv+vJ9qxMVsc1nMfCZi8F9uBzRVUBl7AsYfVk033rD7IE1IUfeItTWJ8qXJKma7AEfhnbsikuzn9l++m/epZl3onX/3gRhtGTxSxPkxxKfqPYXlanLFUdx1Il3xLIBB5jv+YXeBUOp9jNqFf5/QZ0yR1YZEEXfAAAAABJRU5ErkJggg==)](https://github.com/ehsomma/mynfts/actions/workflows/mynfts.yml)
[![GitHub Issues](https://img.shields.io/github/issues/ehsomma/mydao)](https://github.com/ehsomma/mynfts/issues)
[![License](https://img.shields.io/badge/license-MIT-informational)](/LICENSE)

This project implements the https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including the Metadata, Enumerable and Ownable  extensions, and include a mint function to mint from a list of IPFS hashes (CIDs) that link to the json metadata.

### About the NFTs collection
First works by artists who don't yet know they are artists... but they will be.

## Technical features and used tools
* **Solidity**
* **openzeppelin interfaces** (ERC721, ERC165, Metadata, Enumerable and Ownable)
* **Truffle**
* **Unit/Integration tests**
* **Chai** (expect)
* **truffle-assertions** (revert assertions)
* **openzeppelin/test-helpers** (time and block manipulation)
* **eth-gas-reporter**
* **solidity-coverage** (code coverage)
* **coveralls** (code coverage report)
* **solhint** (linter for Solidity)
* **slither** (vulnerability analyzer)
* **Full contract documentation** (NatSpec Format)
* **Solidity coding conventions**
* **Deployed to Rinkeby**
* **Minted tokens** (on Rinkeby network)
* **Opensea** (you can see the NFT collection in [Opensea](https://testnets.opensea.io/collection/natal-artist))
* **Rarible** (you can see the NFT collection in [Rarible](https://rinkeby.rarible.com/collection/0xde66eb41ce884ad750003e8b08341aa2fbd13692))
* **Pinata** ([Pinata](https://www.pinata.cloud/) was used to upload and pin the files to IPFS)
* **IPFS** (images and json metadata files)
* **CI** (Github Actions)

## Additional and extended functions
* **mint()**: Mints the specified list of `hashes` (the IPFS hash of the metadata file) on behalf of `to`.
* **walletOfOwner()**: Returns the tokenIds of the `owner`.
* **tokenURI()**: Returns the Uniform Resource Identifier (URI) for the `tokenId` with the IPFS hash of the json metadata file.
* **setBaseURI()**: Changes the actual {baseURI} to the `newBaseURI`.

> **NOTE:** For more information see code comments in [`NatalArtist.sol`](./contracts/NatalArtist.sol).

## Links
* **Contract** (Rinkeby network): [link...](https://rinkeby.etherscan.io/address/0xDe66eB41Ce884Ad750003E8b08341aa2FBD13692)
* **NFT image**: [link...](https://ipfs.io/ipfs/QmPNYFabAVbGbCZpbP6LjVtdFX2PypkveZwuWikSu4QBPL)
* **Metadata json file** (NFT 0): [link...](https://ipfs.io/ipfs/QmPUT5nrbfKJnSQjuudwom5Z3wdyv8u4Kiv7Xrt3jVazMu) 
* **NFTs collection** (Opensea): [link...](https://testnets.opensea.io/collection/natal-artist)
* **NFTs collection** (Rarible): [link...](https://rinkeby.rarible.com/collection/0xde66eb41ce884ad750003e8b08341aa2fbd13692/items)

<img src="./assets/screenshots/opensea.png?raw=true"/>

## Reports

### Solhint
`
solhint 'contracts/**/*.sol' -f table
`

<img src="./assets/screenshots/solhint-report.png?raw=true"/>

### Tests
`
truffle test
`

<img src="./assets/screenshots/test-report.png?raw=true"/>

### Code coverage
`
truffle run coverage
`

<img src="./assets/screenshots/coverage-report.png?raw=true)"/>

### Gas
`
truffle test --reporter eth-gas-reporter
`

<img src="./assets/screenshots/gas-report.png?raw=true)"/>

### Slither
`
slither --exclude-dependencies .
`

<img src="./assets/screenshots/slither-report.png?raw=true)"/>