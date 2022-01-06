import './App.css';
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'

import {v4 as uuidv4} from 'uuid'
import React from 'react'



class  App extends React.Component {
  state = 
  {
    showBalance: true,
    balance : 10000,
    coinData : [
      {
        key: uuidv4(),
        name: "Bitcoin",
        ticker: "BTC",
        price: 43000,
        balance: 1
      },
      {
        key: uuidv4(),
        name: "Ethereum",
        ticker: "ETH",
        price: 3400,
        balance: 5

      },
      {
        key: uuidv4(),
        name: "Tether",
        ticker: "USDT",
        price: 1,
        balance: 5000

      },
      {
        key: uuidv4(),
        name: "Ripple",
        ticker: "XRP",
        price: 0.80,
        balance: 10000
      }
    ]
  }
  
  handleRefresh = (valueChangeKey) =>{
    const newCoinData = this.state.coinData.map(function(values){
      let newValues = {...values};
      if (valueChangeKey === newValues.key){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState({coinData: newCoinData});
  }

  toggleBalance = () =>{
    this.setState({showBalance: !this.state.showBalance});
  }
  render(){
    return (
      <div className="App">
        <Header />

        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance}
          toggleBalance={this.toggleBalance} />

        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </div>
    );
  }
  
}

export default App;
