import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';



export interface IAddressEntry {
    name: string;
    address: string;
    // Future - allow users to add their profile picture.
    //profilePicture: string 
}

export const AddressEntry = ({ name, address }: IAddressEntry) => {
    // Probably better to just get users to enter in firstName and lastName individually rather than extract the initials
    // names from entry - this is prone to errors.
    const initials = name.split(" ").map((n) => n[0]);

    return (
        <Grid item>
            <Button>
                <Box component="div" className="address-entry">
                    <Avatar>{initials}</Avatar>
                    <Typography>{name}</Typography>
                </Box>
            </Button>
        </Grid>
    )
}