import Web3 from "web3";
import starNotaryArtifact from "../../build/contracts/StarNotary.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = starNotaryArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },
 //function called to show the starName
  starNameFunc: async function(){
    const{starName} = this.meta.methods; 
    // to be able to use the functions in the Smart Contract, destructuring is used to get the function to be called
    const response = await starName().call(); // calling the property from the smart contract
    const owner = document.getElementById("name"); //updating Html
    owner.innerHTML= response;
  },
  //function called to show the starOwner
  starOwnerFunc: async function(){
    const{starOwner} = this.meta.methods; 
    // to be able to use the functions in the Smart Contract, destructuring is used to get the function to be called
    const response = await starOwner().call(); // calling the property from the smart contract
    const owner = document.getElementById("owner"); //updating Html
    owner.innerHTML= response;
  },

  claimStarFunc: async function(){
    const{claimStar,starOwner} = this.meta.methods; 
    // to be able to use the functions in the Smart Contract, destructuring is used to get the function to be called
      // get accounts
    const accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];
    await claimStar().send({from: this.account}); // calling the property from the smart contract
    const response = await starOwner().call();
    App.setStatus("New Star Owner is " + response + ".");
  }
};

window.App = App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  App.start();
});
