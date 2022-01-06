import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 3rem;
    text-align: left;
    padding-left: 5rem
`

export default function AccountBalance(props){
    const buttonText = props.showBalance ? 'Hide Balance': 'Show Balance';
    return (
        <>
            <Section>
                {props.showBalance ? "$ "+ props.amount : null}
                {/* $ {props.amount} */}
                <button onClick={props.toggleBalance}>{buttonText}</button>
            </Section>
        </>
    )
}
AccountBalance.propTypes ={
    amount: PropTypes.number.isRequired,
}
