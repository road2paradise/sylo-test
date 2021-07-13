import React, { useState } from 'react'
import { Typography, IconButton, Icon, Button, Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AddressEntry, IAddressEntry } from '../components/AddressEntry';
import { AddContact } from './AddContact';

export interface IAddress {
    // Some interface stuff
}


export const Address = () => {

    const [addingContact, setAddContact] = useState<boolean>(false);

    let addressLocal = localStorage.getItem("address");
    var addressLocalJSON = [];

    if (addressLocal !== null) {
        addressLocalJSON = JSON.parse(addressLocal);
    }

    // This function is passed to allow for states to be altered in child components.
    function addContact() {
        setAddContact(!addingContact);
    }

    return (
        <div>
            {addingContact ?
                <AddContact addContact={addContact} />
                : <div className="address-page">
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
                </div>
            }


        </div >
    );
}