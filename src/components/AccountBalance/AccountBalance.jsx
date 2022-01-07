import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

// const Section = styled.section`
//     border: 1px solid red;
//     font-size: 3rem;
//     text-align: left;
//     padding-left: 5rem;
// `

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    display: inline-block;
`

const Button = styled.button`
    margin: 0 8px;
`

const BalanceToggleButton = styled(Button)`
    width: 150px;
`

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em;
    vertical-align: middle;
    text-align: left;
    `

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})


export default function AccountBalance(props){
    const buttonText = props.showBalance ? 'Hide Balance': 'Show Balance';
    const buttonClass = props.showBalance ? 'btn btn-warning': 'btn btn-info';
    return (
        <>
            <Balance>{props.showBalance ? formatter.format( props.amount) : null} </Balance>
            <Section>

                <BalanceToggleButton 
                    className={buttonClass} 
                    onClick={props.toggleBalance}>{buttonText}</BalanceToggleButton>
                <Button 
                    className="btn btn-success"
                    onClick={props.handleBrrrr}>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    )
}
AccountBalance.propTypes ={
    amount: PropTypes.number.isRequired,
}
