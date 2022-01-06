import React, { Component } from 'react'
import Coin from '../Coin/Coin'

export default class CoinList extends Component {
    render() {
        return (
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
                this.props.coinData.map( coin =>
                  <Coin {...coin} coinKey={coin.key} handleRefresh={this.props.handleRefresh}/>
                  )
            }
            </tbody>
          </table>
        )
    }
}
