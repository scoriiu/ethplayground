import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface), 
	'0xe172C0F182127E11b1BE0498633491F18A9612e6'
);

export default factory;