import './App.css';
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'

import {v4 as uuidv4} from 'uuid'
import React from 'react'



class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      balance : 10000,
      coinData : [
        {
          key: uuidv4(),
          name: "Bitcoin",
          ticker: "BTC",
          price: 43000
        },
        {
          key: uuidv4(),
          name: "Ethereum",
          ticker: "ETH",
          price: 3400
        },
        {
          key: uuidv4(),
          name: "Tether",
          ticker: "USDT",
          price: 1
        },
        {
          key: uuidv4(),
          name: "Ripple",
          ticker: "XRP",
          price: 0.80
        }
      ]
    }

    this.handleRefresh = this.handleRefresh.bind(this)
  }
  handleRefresh(valueChangeKey){
    const newCoinData = this.state.coinData.map(function({key, ticker, name, price}){
      let newPrice = price;
      if (valueChangeKey === key){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = price * randomPercentage;
      }
      return{
        key,
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({coinData: newCoinData});
  }
  render(){
    return (
      <div className="App">
        <Header />

        <AccountBalance amount={this.state.balance} />

        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </div>
    );
  }
  
}

export default App;
