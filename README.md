# Sylo Technical Test - Front End Developer
Sylo io - technical test

**I'd like to extend my thanks to Jimmy - this was a very informative interview and regardless of result - I have learnt alot about web3!**

**Time taken: 3 hours**


# My Accomplishments :smiley: :tada:
- Integrated Web3js library to:
    - Connects to the user's installed MetaMask plugin and therefore access to user's account if given permission.
    - Uses methods to:
        - Check if the address entered is a valid address 
        - Checks if the balance of the user is greater than the amount that is proposed to be sent
        - Sends ethereum to and from specified accounts (that being connected, and that being selected from the address book).
- An Address book page that:
    - Contains a list of locally stored (session storage) crypto addresses.
    - Has an new contact button.
    - Clickable accounts to send choose users to send crypto to.
- A New Contact page that:
    - Creates a new user into the local session storage
    - Uses web3 to check whether or not the address is a valid ethereum address
    - Disables button if any validations are not met (no name and an invalid ethereum address).
- A Send page that:
    - Uses information from states and locally stored data that sends ether from a specific address (connected) to the specified user.
    - Checks if the amount of ether is a valid amount (can't send more than you have).


# Things I didnt accomplish / Future works and considerations :sweat: :exclamation:
I sadly didnt have time to implement everything that I would have liked.
Some future considerations: 

- Better layout and UI (It looks ugly I know, If i had more time to play around with Material UI - I might have made it look alot cleaner)
- Failed to implement edit and delete address (however these are rather trivial - just ran out of time)
- Implemented a router - to save myself the need for conditional rendering and passing callbacks to change states (prop drilling)
- Implemented a back button to go back at different points in the application
- Implemented url's for avatars, or allow users to upload avatars
- Implemented better state management - redux, context etc.

*There are probably more that are littered in my comments throughout my code.*

# This project was created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Firstly clone the repo using:

```
git clone https://github.com/road2paradise/sylo-test.git
```

In the project directory, run:

```
npm install 
```
This installs all the necessary dependencies for the project.

To run the website, in the project directory run:

```
npm run start
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Start Sending Ether

Please download and sign up for a MetaMask account on your phone or in your browser: https://metamask.io/

When prompted, you will be asked if you want to connect your account to localhost. Please click yes.

To get test ether, you can use any of the test networks that are available on the ethereum blockchain. This application has been mainly tested with the **Rinkeby test network.**

You can request for some test ether by doing an tweet or facebook post publically to request funds. See link: https://faucet.rinkeby.io/

The page will reload if you make edits. 

You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
