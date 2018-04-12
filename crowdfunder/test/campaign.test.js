const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: 1000000 });

	await factory.methods.createCampaign('100').send({
		from: accounts[0],
		gas: 1000000
	});

	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();

	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
	);
});

describe ('Campaigns', () => {
	it('deploys', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it('create campaign creator', async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(manager, accounts[0]);
	});

	it('contribution', async () => {
		await campaign.methods.contribute().send({
			from: accounts[1],
			value: 3000000
		});

		const count = await campaign.methods.contributorsCount().call();
		assert.equal(1, count);

		const isContributor = await campaign.methods.contributors(accounts[1]).call();
		assert(isContributor);
	});

	it('require minimum contribution', async () => {
		try {
			await campaign.methods.contribute().send({
				from: accounts[1],
				value: 1
			});

			assert(false);

		} catch(err) {
			assert(err);
		}
	});

	it('allows manager to create request', async () => {
		await campaign.methods.createRequest('abc', 7777, accounts[1]).send({
			from: accounts[0],
			gas: 1000000
		});

		const request = await campaign.methods.requests(0).call();
		assert.equal('abc', request.description);
		assert.equal(7777, request.amount);
		assert.equal(accounts[1], request.recipient);
		assert(!request.completed);
	});

	it('end-to-end happy path', async () => {
		await campaign.methods.contribute().send({from: accounts[1], value: web3.utils.toWei('1', 'ether')});
		await campaign.methods.contribute().send({from: accounts[2], value: web3.utils.toWei('1', 'ether')});
		await campaign.methods.contribute().send({from: accounts[3], value: web3.utils.toWei('1', 'ether')});

		await campaign.methods.createRequest('request1', web3.utils.toWei('0.5', 'ether'), accounts[4]).send({
			from: accounts[0],
			gas: 1000000
		});

		await campaign.methods.approveRequest(0).send({
			from: accounts[2],
			gas: 1000000
		});

		await campaign.methods.approveRequest(0).send({
			from: accounts[3],
			gas: 1000000
		});

		request = await campaign.methods.requests(0).call();
		assert(2, request.approvalCount);

		initialBalanceRecipient = await web3.eth.getBalance(accounts[4]);
		await campaign.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas: 1000000
		});

		request = await campaign.methods.requests(0).call();
		assert(request.completed);
		
		const balanceRecipientAfterPayout = await web3.eth.getBalance(accounts[4]);
		assert.equal(balanceRecipientAfterPayout - initialBalanceRecipient, 
					 web3.utils.toWei('0.5', 'ether'));

	});
});