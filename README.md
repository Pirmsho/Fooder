# [Fooder](https://fooder-pied.vercel.app/)

## Project Overview

![Imgur](https://imgur.com/tJN9ImY.jpg)

### Simple Guide
---

I made this simple CRUD app to practice React. It uses React, Framer Motion for simple animations and Firebase realtime database. 

Foods data is fetched from firebase on entry to the site.

You can Add any item with 1-5 quantity in the cart. clicking the cart displays the modal with all items you have added, it also calculates the total amount. you can edit item quantities in the cart itself. item is removed from the cart when the quantity goes below 1.

clicking **Order** button will display an additional form in the modal, below the items. Form has very basic validation, and clicking **Checkout** actually sends the input data and items in cart to firebase backend.

### Technical stuff
---

Cart state is managed globally by React's **Context API**. Adding items, Removing items and modifying their quantity is managed by CartReducer function and uses **useReducer** hook from react. you can see this code in /store folder files.

You can clone this repo, and run `npm install` in your terminal. to start up the dev server, run `npm start` after previous install is done. 

#### Contact
---
If you Have any questions, suggestions or tips, you can simply contact me at **d.pirmisashvili@gmail.com**
