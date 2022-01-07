import React, { Component } from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components';

const Table = styled.table`
  font-size: 1 rem
`

export default function CoinList(props){
      return (
          <Table className="table table-primary table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {/* {props.showBalance ? <th>Balance</th>: null} */}
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
                props.coinData.map( coin =>
                  <Coin {...coin} 
                    coinKey={coin.key} 
                    handleRefresh={props.handleRefresh}
                    showBalance={props.showBalance}
                    handleTransaction={props.handleTransaction}/>
                  )
            }
            </tbody>
        </Table>
      )
}
