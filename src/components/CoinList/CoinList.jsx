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
                {this.props.showBalance ? <th>Balance</th>: null}
              </tr>
            </thead>
            <tbody>
            {
                this.props.coinData.map( coin =>
                  <Coin {...coin} 
                    coinKey={coin.key} 
                    handleRefresh={this.props.handleRefresh}
                    showBalance={this.props.showBalance}/>
                  )
            }
            </tbody>
          </table>
        )
    }
}
