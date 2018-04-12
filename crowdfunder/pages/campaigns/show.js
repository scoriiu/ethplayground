import React, { Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import campaignContract from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = campaignContract(props.query.address);
		const summary = await campaign.methods.getSummary().call();

		return {
			address: props.query.address,
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	} 

	renderDetails() {
		const {
			minimumContribution,
			balance,
			requestsCount,
			approversCount,
			manager,
		} = this.props;

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The creator of the campaign.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(minimumContribution, 'ether'),
				meta: 'Minimum contribution in ETH',
				description: 'The minimum contribution an user is allowed to participate.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Balance in ETH',
				description: 'The balanec of money this campaign has left to spend.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: requestsCount,
				meta: 'Number of requests',
				description: 'A request is about to withdraw money from the contract.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: approversCount,
				meta: 'Number of approvers',
				description: 'The number of contributors to this campaign',
				style: { overflowWrap: 'break-word' }
			}
		];
		
		return <Card.Group items={items}/>;
	}

	render() {
		return (
			<Layout>
				<h3>Show Campaign</h3>
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderDetails()}
							
						</Grid.Column>
						<Grid.Column width={6}>
							<ContributeForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a>
									<Button primary>Show Requests</Button>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>
		);
	}
}

export default CampaignShow;