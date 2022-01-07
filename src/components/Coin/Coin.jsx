import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 14vw
`
const TdControls = styled(Td)`
    width: 34vw
`
const TdName = styled(Td)`
    width: 24vw
`

const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`

export default function Coin(props) {

    const handleRefresh = async (event)=>{
        event.preventDefault();
        await props.handleRefresh(props.coinKey);
    };

    const handleBuy = async (event)=>{
        event.preventDefault();
        await props.handleTransaction(true, props.coinKey);
    };
    const handleSell = async (event)=>{
        event.preventDefault();
        await props.handleTransaction(false, props.coinKey);
    };

    return (
        <tr >
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{props.showBalance ?  props.balance : "-"}</Td>
            
            <TdControls>
                <Button 
                    onClick={handleRefresh}
                    className="btn btn-info">Refresh
                </Button>
                <Button 
                    onClick={handleBuy}
                    className="btn btn-warning">Buy
                </Button>
                <Button 
                    onClick={handleSell}
                    className="btn btn-danger">Sell
                </Button>
            </TdControls>
        </tr>
    );
}

Coin.propTypes ={
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
