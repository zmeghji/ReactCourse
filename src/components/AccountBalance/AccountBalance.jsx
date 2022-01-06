import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 3rem;
    text-align: left;
    padding-left: 5rem
`

export default class AccountBalance extends Component {
    


    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance': 'Show Balance';
        return (
            <>
                <Section>
                    {this.props.showBalance ? "$ "+ this.props.amount : null}
                    {/* $ {this.props.amount} */}
                    <button onClick={this.props.toggleBalance}>{buttonText}</button>
                </Section>
            </>
        )
    }
}
AccountBalance.propTypes ={
    amount: PropTypes.number.isRequired,
}
