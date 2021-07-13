import React from 'react'
import { Typography, IconButton, Icon, Button, Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AddressEntry, IAddressEntry } from '../components/AddressEntry';

export interface IAddress {
    // Some interface stuff
}


export const Address = () => {
    // Some states here to add address etc.
    // This is just for testing :)
    const address = [];
    address[0] = { name: "Kenny Nguyen", address: "someCryptoAddress" };
    address[1] = { name: "Kenny Nguyen", address: "someCryptoAddress" };
    address[2] = { name: "Kenny Nguyen", address: "someCryptoAddress" };

    localStorage.setItem("address", JSON.stringify(address));


    let addressLocal = localStorage.getItem("address");
    var addressLocalJSON = [];
    if (addressLocal !== null) {
        addressLocalJSON = JSON.parse(addressLocal);
    }

    return (
        <div className="address-page">
            <Typography variant='h4'>
                Address Book
            </Typography>
            <Grid container direction="column" spacing={4} alignItems="center" justifyContent="center">
                <Grid item>
                    <Button onClick={addContact}>
                        <AddIcon />
                        <Typography variant='h5'>
                            New Contact
                        </Typography>
                    </Button>
                </Grid>
                {/* Should inject UUID keys here to prevent re-rendering due to key mismatch. NEVER use array indexes as keys. */}
                {addressLocalJSON.map((address: IAddressEntry) => {
                    return (
                        <AddressEntry {...address} />
                    )
                })}
            </Grid>
        </div >
    );
}