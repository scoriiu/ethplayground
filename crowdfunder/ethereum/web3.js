import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	// running in the browser and web3 is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	// running on the server *OR* or web3 not running
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/B7Y31nGAckibYuZJtwzk'
	);

	web3 = new Web3(provider);
}

export default web3;