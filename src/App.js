import './App.css';
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'

import {v4 as uuidv4} from 'uuid'
import React from 'react'
import axios from 'axios'


const COIN_COUNT =10;
const TICKER_URL = "https://api.coinpaprika.com/v1/tickers/";
class  App extends React.Component {
  state = 
  {
    showBalance: true,
    balance : 10000,
    coinData : []
  }
  
  componentDidMount = async () =>{
    let response = await axios.get('https://api.coinpaprika.com/v1/coins');
    let coinKeys = response.data.slice(0,COIN_COUNT).map (coin => coin.id);

    const promises = coinKeys.map(key =>axios.get(TICKER_URL+ key));

    let coinData = await Promise.all(promises)
    let coinPriceData = coinData.map( function(response){
      let coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price:  parseFloat(Number( coin.quotes.USD.price).toFixed(4))
      }
    });
    this.setState({coinData: coinPriceData});

  }
  handleRefresh = async (valueChangeKey) =>{
    var response = await axios.get(TICKER_URL+ valueChangeKey);

    const coinData = this.state.coinData.map( function(values){
      let newValues = {...values};
      if (valueChangeKey === newValues.key){
        let coin = response.data;
        newValues.price = parseFloat(Number( coin.quotes.USD.price).toFixed(4))
      }
      return newValues;
    });
    this.setState({coinData});
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
