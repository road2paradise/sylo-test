import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import Web3 from 'web3';

export interface IAddContact {
    addContact: () => void
}

export const AddContact = ({ addContact }: IAddContact) => {
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    const web3 = new Web3(Web3.givenProvider);


    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleAddressChange(e: ChangeEvent<HTMLInputElement>) {
        // This validates using web3 if the address is a valid address or not.
        if (web3.utils.isAddress(e.target.value)) {
            setAddress(e.target.value);
        } else {
            // resets the address if its invalid.
            setAddress('');
        }

    }

    function handleSubmit() {
        var addressArray = getLocalAddresses();
        console.log(addressArray);
        var contact = {
            name: name,
            address: address,
        }
        addressArray.push(contact);
        localStorage.setItem("address", JSON.stringify(addressArray));
        // Callback to render Address book again.
        addContact();
    }

    function getLocalAddresses() {
        // Get address from local storage
        let addressLocalStorage = localStorage.getItem("address");
        // Expecting an array of addresses, else return an empty array ready to add contacts.
        if (addressLocalStorage !== null) {
            return JSON.parse(addressLocalStorage);
        } else {
            return [];
        }
    }

    return (
        <div className="add-contact-page">
            <div className="add-contact-title">
                <Typography variant='h4'>
                    New Contact
                </Typography>
            </div>
            <div>
                <TextField onChange={handleNameChange} id="outlined-basic" variant="outlined" label="Name" />
                <TextField error={address === ''} helperText={address === '' && "Please enter a valid ethereum address"} onChange={handleAddressChange} id="outlined-basic" variant="outlined" label="Address" />
            </div>
            <Button disabled={address === '' || name === ''} onClick={handleSubmit} type="submit">Save</Button>
        </div>
    )
}