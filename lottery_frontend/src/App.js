import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./lottery";

import "./App.css";

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    submitvalue: '',
    submitMessage: ''
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({submitMessage: 
      <div className="alert alert-info fade in">
        <a href="#" className="close" data-dismiss="alert">&times;</a>
        <strong>Please wait!</strong> Transaction is being processed...
      </div> 
    });

    try {
      const ret = await lottery.methods.enter().send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.submitvalue, 'ether')
      });

      this.setState({submitMessage: 
        <div className="alert alert-success fade in">
          <a href="#" className="close" data-dismiss="alert">&times;</a>
          <strong>Success!</strong> You have been sucessfully entered.
        </div> 
      });
    } catch (err) {
      this.setState({submitMessage: 
        <div className="alert alert-danger fade in">
          <a href="#" className="close" data-dismiss="alert">&times;</a>
          <strong>Error!</strong> Something went wrong...
        </div> 
      });
    }
  }

  onClick = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    if (accounts[0] != this.state.manager) {
      this.setState({submitMessage: 
        <div className="alert alert-danger fade in">
        <a href="#" className="close" data-dismiss="alert">&times;</a>
        <strong>Error!</strong> Only the manager is permited to perform this action.
        </div> 
      });
      return;
    }

    this.setState({submitMessage: 
      <div className="alert alert-info fade in">
        <a href="#" className="close" data-dismiss="alert">&times;</a>
        <strong>Please wait!</strong> Transaction is being processed...
      </div> 
    });

    try {
      await lottery.methods.pickWinner().send({
        from: accounts[0]
      });

      this.setState({submitMessage: 
        <div className="alert alert-success fade in">
        <a href="#" className="close" data-dismiss="alert">&times;</a>
        <strong>Success!</strong> A winner has been picked!.
        </div> 
      });
    } catch(err) {
      this.setState({submitMessage: 
        <div className="alert alert-danger fade in">
          <a href="#" className="close" data-dismiss="alert">&times;</a>
          <strong>Error!</strong> Something went wrong...
        </div> 
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron bg-info">
          <h2>Lottery Contract</h2>
          <hr className="my-4" />
          <p>The contract id managed by {this.state.manager}</p>
          <p>
            There are currently {this.state.players.length} players competing to win
            &nbsp;{web3.utils.fromWei(this.state.balance, "ether")} ETH.
          </p>
          <hr className="my-4" />
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Amount of ether to enter &nbsp;</label>
              <input
                submitvalue={this.state.submitvalue}
                onChange = {event => this.setState({submitvalue: event.target.value })}
              />
            </div>
            <button className="btn btn-primary">Enter</button>
          </form>
          <hr className="my-4" />
          <form onSubmit={this.onClick}>
            <div>
              <label>Time to pick a winner? </label>
            </div>
            <button className="btn btn-danger">Enter</button>
          </form>
          <hr className="my-4" />
          {this.state.submitMessage}
        </div>
      </div>
    );
  }
}

export default App;
