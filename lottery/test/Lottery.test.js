const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let lottery;

beforeEach( async () => {
	accounts = await web3.eth.getAccounts();
	lottery = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas: 1000000 });
});

describe('Lottery', () => {
	it('Deploys', () => {
		assert.ok(lottery.options.address);
	});

	it('Manager', async () => {
		const manager = await lottery.methods.manager().call();
		assert.equal(manager, accounts[0]);
	});

	it('Players', async () => {
		await lottery.methods.enter().send({ 
			from: accounts[1], 
			value: web3.utils.toWei('1', 'ether')
		});
		await lottery.methods.enter().send({ 
			from: accounts[2], 
			value: web3.utils.toWei('1', 'ether')
		});

		const players = await lottery.methods.getPlayers().call();
		assert.equal(2, players.length);
		assert.deepEqual(players, [accounts[1], accounts[2]]);
	});

	it('DenyInsufficientContribution', async () => {
		try {
			await lottery.methods.enter().send({ 
				from: accounts[1], 
				value: 0
			});
			assert(false);
		} catch (err) {
			assert(err);
		}
	});

	it('RestictiveAccessToPick', async () => {
		try {
			await lottery.methods.pickWinner().send({ 
				from: accounts[1], 
			});
			assert(false);
		} catch (err) {
			assert(err);
		}
	});

	it('EndToEnd', async () => {
		var balancesBefore = []
		balancesBefore.push(await web3.eth.getBalance(accounts[1]));
		balancesBefore.push(await web3.eth.getBalance(accounts[2]));
		balancesBefore.push(await web3.eth.getBalance(accounts[3]));

		await lottery.methods.enter().send({ 
			from: accounts[1], 
			value: web3.utils.toWei('1', 'ether')
		});
		await lottery.methods.enter().send({ 
			from: accounts[2], 
			value: web3.utils.toWei('1', 'ether')
		});
		await lottery.methods.enter().send({ 
			from: accounts[3], 
			value: web3.utils.toWei('1', 'ether')
		});

		prize = await lottery.methods.getPrizeValue().call();
		assert.equal(web3.utils.toWei('3', 'ether'), prize);

		await lottery.methods.pickWinner().send({ 
			from: accounts[0], 
		});

		var balancesAfter = []
		balancesAfter.push(await web3.eth.getBalance(accounts[1]));
		balancesAfter.push(await web3.eth.getBalance(accounts[2]));
		balancesAfter.push(await web3.eth.getBalance(accounts[3]));

		for(var i = 0; i < balancesAfter; i++) {
			assert.ok((balancesBefore[i] > (balancesAfter[i] + 0.99)) ||
					  (balancesBefore[i] < (balancesAfter[i] + 1.99)))
		}

		const players = await lottery.methods.getPlayers().call();
		assert(players.length == 0);

		prize = await lottery.methods.getPrizeValue().call();
		assert.equal(0, prize);
	});
});

