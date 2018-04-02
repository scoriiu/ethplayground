const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');	

let accounts;
let inbox;

beforeEach(async () => {
	// get accounts
	accounts = await web3.eth.getAccounts();

	// use one of these accounts to deploy the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({
			data: bytecode,
			arguments: ['initial message'] 
		})
		.send({
			from: accounts[0],
			gas: '1000000'
		})
});

describe('Inbox', () => {
	it('isContractDeployed', () => {
		assert.ok(inbox.options.address);
	});

	it('constructor', async () => {
		const message = await inbox.methods.getMessage().call();
		assert.equal(message, 'initial message');
	});

	it('setMessage', async () => {
		await inbox.methods.setMessage('anotherMessage').send({ from: accounts[0]});
		const message = await inbox.methods.getMessage().call();
		assert.equal(message, 'anotherMessage');
	});
});