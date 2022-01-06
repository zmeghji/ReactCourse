import React, { Component } from 'react'
import logo from '../../logo.svg';
import './Header.css';

import styled from 'styled-components';

const HeaderTag = styled.section`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`
export default class Header extends Component {
    render() {
        return (
            <HeaderTag >
                <Img src={logo} alt="logo" className="App-logo" />
                <h1>Coin Exchange</h1>
            </HeaderTag>
        )
    }
}
