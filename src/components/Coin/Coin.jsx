import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    color: red;
`

export default function Coin(props) {

    const handleClick = async (event)=>{
        event.preventDefault();
        await props.handleRefresh(props.coinKey);
    };

    return (
        <tr >
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {props.showBalance ?  <Td>{props.balance}</Td> : null}
            
            <Td><button onClick={handleClick}>Refresh</button></Td>
        </tr>
    );
}

Coin.propTypes ={
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
