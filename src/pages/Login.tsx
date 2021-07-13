import React, { MouseEvent, useState } from 'react'
import { Typography, Button } from '@material-ui/core';
import logo from '../logo.svg';
import Web3 from 'web3';

export interface ILogin {
    connectWallet: (event: MouseEvent<HTMLButtonElement>) => void;
}


export const Login = ({ connectWallet }: ILogin) => {
    return (
        <div className="login-page">
            <img src={logo} width="250px" alt="logo" />
            <Typography variant="h2">Crypto address book</Typography>
            <Typography variant="h6">The easiest and quickest way to manage and pay your contacts. <br />
                Connect your wallet to begin
            </Typography>
            <Button onClick={connectWallet} variant="contained" size="large">
                Connect your wallet
            </Button>
        </div>
    );
}