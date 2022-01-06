import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin'
import React from 'react'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange</h1>
      </header>

      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" price={44000.00}/>
            <Coin name="Ethereum" ticker="ETH" price={3600.00}/>
            <Coin name="Tether" ticker="USDT" price={1}/>
            <Coin name="Ripple" ticker="XRP" price={0.8}/>


          </tbody>
        </table>
    </div>
  );
}

export default App;
