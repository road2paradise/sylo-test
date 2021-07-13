import React, { ChangeEvent, useState } from 'react';
import { Avatar, Button, createStyles, Grid, Input, InputAdornment, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Web3 from 'web3';
import { IAddressEntry } from '../components/AddressEntry';
import { red } from '@material-ui/core/colors';

export interface ISend extends IAddressEntry {
    address: string;
    showSendContacts: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: "#ff0000"
        },
    }),
);

export const Send = ({ name, address, showSendContacts }: ISend) => {

    // Should probably have done it better with state management, repeating web3 and initials everywhere.
    // Instead of prop drilling I've just used kept it simple and initialised it everywhere :)
    const web3 = new Web3(Web3.givenProvider);
    const initials = name.split(" ").map((n) => n[0]);

    const [sendAmount, setSendAmount] = useState<string>("");
    const [errorAmount, setErrorAmount] = useState<boolean>(false);
    const classes = useStyles();

    function handleInputAmount(e: ChangeEvent<HTMLInputElement>) {
        setSendAmount(e.target.value);
    }

    async function handleSend() {
        const accounts = await web3.eth.getAccounts();
        var balance = await web3.eth.getBalance(accounts[0]);
        if (Number(web3.utils.fromWei(balance, 'ether')) < Number(sendAmount)) {
            setErrorAmount(true);
        } else {
            setErrorAmount(false);
            web3.eth.sendTransaction({
                from: accounts[0],
                to: address,
                value: web3.utils.toWei(sendAmount, "ether"),
            }).then(function (tx) {
                // Just logging the transaction return, this should catch any errors in future.
                console.log("Transaction: ", tx);
            })
        }
    }
    return (
        <Grid container direction="column" spacing={4} alignItems="center" justifyContent="center">
            <Grid item>
                <Typography> Send to {name}</Typography>
            </Grid>
            <Grid item>
                <Avatar>{initials}</Avatar>
            </Grid>
            <Grid item>
                <Typography>{address}</Typography>
            </Grid>
            {errorAmount ?
                <Grid item>
                    <Typography className={classes.text}>
                        Error, You do not have enough ether to send this amount. Please enter a valid amount of ether you have in your balance.
                    </Typography>
                </Grid>
                : null}
            <Grid item>
                <Input error={errorAmount} onChange={handleInputAmount} endAdornment={<InputAdornment position="end">Eth</InputAdornment>} />
            </Grid>
            <Grid item>
                <Button onClick={handleSend}>
                    Send
                </Button>
            </Grid>
        </Grid>

    )
}