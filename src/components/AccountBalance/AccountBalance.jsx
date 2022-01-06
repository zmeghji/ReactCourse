import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 3rem;
    text-align: left;
    padding-left: 5rem
`
// import  './Coin.css';
export default class AccountBalance extends Component {
    render() {
        return (
            <>
                <Section>
                    $ {this.props.amount}
                </Section>
                {/* <section className="balance-section">
                    $ {this.props.amount}
                </section> */}
            </>
        )
    }
}
AccountBalance.propTypes ={
    amount: PropTypes.number.isRequired,
}
