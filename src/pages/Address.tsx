import React, { useState } from 'react'
import { Typography, IconButton, Icon, Button, Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AddressEntry, IAddressEntry } from '../components/AddressEntry';
import { AddContact } from './AddContact';
import { Send } from './Send';

export interface IAddress {
    // Some interface stuff
}


export const Address = () => {

    const [showAddContact, setShowAddContact] = useState<boolean>(false);
    const [showSend, setShowSend] = useState<boolean>(false);
    const [sendContactIndex, setSendContactIndex] = useState<number>(0)

    let addressLocal = localStorage.getItem("address");
    var addressLocalJSON = [];

    if (addressLocal !== null) {
        addressLocalJSON = JSON.parse(addressLocal);
    }

    // Poor mans react-router. I am controlling rendering using states and conditional renders.
    // Should have used react-router or something simpler.
    function showAddContacts() {
        setShowAddContact(!showAddContact);
    }

    function showSendContacts(index: number) {
        setShowSend(!showSend);
        setSendContactIndex(index);
    }

    return (
        <div>
            {showAddContact ?
                <AddContact showAddContacts={showAddContacts} />
                : showSend ? <Send showSendContacts={showSendContacts} {...addressLocalJSON[sendContactIndex]} /> :
                    <div className="address-page">
                        <Typography variant='h4'>
                            Address Book
                        </Typography>
                        <Grid container direction="column" spacing={4} alignItems="center" justifyContent="center">
                            <Grid item>
                                <Button onClick={showAddContacts}>
                                    <AddIcon />
                                    <Typography variant='h5'>
                                        New Contact
                                    </Typography>
                                </Button>
                            </Grid>
                            {/* Should inject UUID keys here to prevent re-rendering due to key mismatch. NEVER use array indexes as keys. */}
                            {addressLocalJSON.map((address: IAddressEntry, index: number) => {
                                return (
                                    <Button onClick={() => showSendContacts(index)}>
                                        <AddressEntry {...address} />
                                    </Button>
                                )
                            })}
                        </Grid>
                    </div>
            }
        </div >
    );
}