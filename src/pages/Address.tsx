import React from 'react'
import { Typography, IconButton, Icon, Button, Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface IAddress {
    // Some interface stuff
}


export const Address = () => {
    // Some states here to add address etc.
    const address = [];
    address[0] = "some-address-1"
    address[1] = "some-address-1"
    address[2] = "some-address-1"
    address[3] = "some-address-1"

    localStorage.setItem("address", JSON.stringify(address));

    return (
        <div className="Address-Page">
            <Grid container direction='row' spacing={2}>
                <Grid item>
                    <Typography variant='h4'>
                        Address Book
                    </Typography>
                    <Button>
                        <AddIcon />
                        <Typography variant='h5'>
                            New Contact
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            {`${address[0]} + ${address[1]} + ${address[2]} + ${address[3]}`}
        </div>
    );
}