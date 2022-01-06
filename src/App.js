import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin'
import AccountBalance from './components/AccountBalance/AccountBalance'
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
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Coin Exchange</h1>
        </header>

        <AccountBalance amount={this.state.balance} />

        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            {
                this.state.coinData.map( coin =>
                  // <Coin key={coin.key} name={coin.name} ticker={coin.ticker} price={coin.price}/>
                  <Coin {...coin} />
                  )
            }
             
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
