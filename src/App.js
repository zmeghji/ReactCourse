import './App.css';
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import Header from './components/Header/Header'

import {v4 as uuidv4} from 'uuid'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootswatch/dist/flatly/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all'


const COIN_COUNT =10;
const TICKER_URL = "https://api.coinpaprika.com/v1/tickers/";
function  App (props){

  const [balance, setBalance] = useState(10000)
  const [showBalance, setShowBalance] = useState(false)
  const [coinData, setCoinData] = useState([])


  useEffect(async function(){
    if(coinData.length ===0){
      //component did mount
      await componentDidMount();
    }
    else{
      //component did update
    }

  })
  const componentDidMount = async () =>{
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
    setCoinData(coinPriceData);
  }
  const handleRefresh = async (valueChangeKey) =>{
    var response = await axios.get(TICKER_URL+ valueChangeKey);

    const newCoinData = coinData.map( function(values){
      let newValues = {...values};
      if (valueChangeKey === newValues.key){
        let coin = response.data;
        newValues.price = parseFloat(Number( coin.quotes.USD.price).toFixed(4))
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const toggleBalance = () =>{
    setShowBalance(!showBalance)
  }

  const handleBrrrr = () =>{
    setBalance(oldBalance => oldBalance +1200);
  }
  const handleTransaction = (isBuy, valueChangeId) =>{
    var balanceChange = isBuy ? 1: -1;
    const newCoinData =coinData.map(function(coin){
      let newCoin = {...coin};
      if (valueChangeId == coin.key){
        newCoin.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * newCoin.price);
      }
      return newCoin;
    })
    setCoinData(newCoinData);
  }

  return (
    <div className="App">
      <Header />

      <AccountBalance 
        amount={balance} 
        showBalance={showBalance}
        toggleBalance={toggleBalance}
        handleBrrrr={handleBrrrr}
         />

      <CoinList 
        coinData={coinData} 
        handleRefresh={handleRefresh}
        showBalance={showBalance}
        handleTransaction={handleTransaction} />
    </div>
  );
  
}

export default App;
