import React, { Component } from 'react'
import Coin from '../Coin/Coin'

export default function CoinList(props){
      return (
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
              {props.showBalance ? <th>Balance</th>: null}
            </tr>
          </thead>
          <tbody>
          {
              props.coinData.map( coin =>
                <Coin {...coin} 
                  coinKey={coin.key} 
                  handleRefresh={props.handleRefresh}
                  showBalance={props.showBalance}/>
                )
          }
          </tbody>
        </table>
      )
}
