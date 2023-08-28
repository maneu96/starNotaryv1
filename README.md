# starNotaryv1
Smart Dapp that allows a wallet to claim a "Star" (Smart Contract).

This is a Simple Dapp implementation which allows wallets to interact with a smart contract, to claim a "Star" and change its name.
It was developed using Truffle and tested in a localhost environment.



  Pre-requisites:
   
    1 - Node v18.16.0
    
    2 - Truffle v5.11.2 (core: 5.11.2)

    3 - Ganache v7.9.0

    4 - Solidity v0.5.16 (solc-js)

    5 - Web3.js v1.10.0

    6 - Metamask (Make sure the wallets that are defined by truffle develop are also accessible in your metamask! otherwise you won't be able to interact with the smart contract)

  To Run the Dapp :

    1 - Clone the repository

    2 - Open a terminal window and cd into the folder './starNotaryv1
    
    3 - Run the command:  truffle develop                    (This creates a local test Ethereum network and awards you with 10 wallets, each one with 100 ETH)

    4 - Run the command:  truffle migrate --reset            (This deploys the smart contract to the locally running network)

    5 - Open a new terminal window and cd into the folder './starNotaryv1/app'

    6 - Run the command:  npm run dev                        (This creates a server instance which you can access from your browser to interact with the smart contract)

    7 - Go to your browser and copy the localhost port ie. http://localhost:8080/

    8 - Have fun!

  

    
