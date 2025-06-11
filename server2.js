const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person = require('./models/person');
const MenuItem = require('./models/MenuItem');

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to my hotel. How can I help you? We have a list of menus.');
});



// app.post('/menu', async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenuItem = new MenuItem(data);
//     const response = await newMenuItem.save();
//     console.log('Data saved');
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.get('/menu', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log('Data fetched');
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




// import the router file 
const menuItemRouts = require('./routs/menuItemRouts');
//use the routes
app.use('/menu',menuItemRouts);



const personRouts = require('./routs/personRouts');
//use the routes
app.use('/person',personRouts);


app.listen(3000, () => {
  console.log('Listening on port 3000');
});


