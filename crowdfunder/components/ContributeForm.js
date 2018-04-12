import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import campaignContract from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false
	}

	onSubmit = async (event) => {
		event.preventDefault();
	
		this.setState({ loading: true, errorMessage: '' });

		try {
			const campaign = campaignContract(this.props.address);
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.contribute().send({
				value: web3.utils.toWei(this.state.value, 'ether'),
				from: accounts[0]
			});

			Router.replaceRoute(`/campaigns/${this.props.address}`);
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input 
						label="ETH" 
						labelPosition="right"
						onChange={event => this.setState({value: event.target.value})}
					/>
				</Form.Field>
				<Message error header="Oops!" content={this.state.errorMessage}/>
				<Button loading={this.state.loading} primary>Contribute!</Button>
			</Form>
		);
	}
}

export default ContributeForm;