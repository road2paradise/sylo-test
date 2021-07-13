import React from 'react';



export interface IAddressEntry {
    name: string;
    address: string;
    // Future - allow users to add their profile picture.
    //profilePicture: string 
}

export const AddressEntry = () => {
    return (
        <div className="Address-entry">
            {/* some address entries here */}
        </div>
    )
}