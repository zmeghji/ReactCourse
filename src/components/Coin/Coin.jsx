import React, { Component } from 'react';
import  './Coin.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    color: red;
`

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(event){
        event.preventDefault();
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState) {
            return {price: oldState.price * randomPercentage};
        });
    }

    render() {
        return (
            <tr className="coin-row">
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td><button onClick={this.handleClick}>Refresh</button></Td>
            </tr>
        );
    }
}

Coin.propTypes ={
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
