//import 'babel-polyfill';
const StarNotary = artifacts.require("./StarNotary.sol");

let accounts;
var owner;

contract('StarNotary', async(accs)=>{
    accounts = accs; // Assigning the test accounts
    owner = accounts[0]; //Assign the owner of the Test account
});

it("has correct name", async()=> { // it(description of the test, contract)
    let instance = await StarNotary.deployed();
    assert.equal(await instance.starName.call(),'Udacity Star');
})

it("can be claimed", async()=>{
    let instance = await StarNotary.deployed();
    await instance.claimStar({from: owner});  // argument is an object that specifies the address from which the contract is called
    assert.equal(await instance.starOwner.call(),owner);
})

it("can change ownership", async()=> {
    let instance = await StarNotary.deployed();
    await instance.claimStar({from: owner});
    assert.equal(await instance.starOwner.call(),owner); // Check if its in the first owner's possession
    await instance.claimStar({from: accounts[1]});
    assert.equal(await instance.starOwner.call(),accounts[1] ); // Check if it changed owners.
})

it("can change name", async()=> {
    let instance = await StarNotary.deployed();
    await instance.changeStarName('North Star');
    assert(await instance.starName.call(), 'North Star');
})