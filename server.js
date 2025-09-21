const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Products data
const products = [
  {id:1,name:'Unibic Cookies',price:270,img:'https://i.postimg.cc/VNP2r89m/unibic.avif',description:'Pack of 4 units × 67.5g = 270gms. Expiry: 01.05.2026.'},
  {id:2,name:'Dabur Red Paste',price:500,img:'https://i.postimg.cc/RV3YgFXv/dred.avif',description:'2 packs × 200g + 1 pack × 100g = 500gms. Expiry: 05.2027.'},
  {id:3,name:'Dettol Soaps',price:750,img:'https://i.postimg.cc/FRWPZ5Sf/dettol.webp',description:'5 units × 150g = 750gms. Expiry: 07.2027.'},
  {id:4,name:'Santoor Soaps',price:1000,img:'https://i.postimg.cc/L5GNctN2/santoor.jpg',description:'8 units × 125g = 1000gms. Expiry: 05.2028.'},
  {id:5,name:'Closeup Toothpaste',price:600,img:'https://i.postimg.cc/jqn9X28t/closeup.jpg',description:'4 tubes × 150g = 600gms. Expiry: 05.2027.'},
  {id:6,name:'Ariel Detergent Liquid Top Load',price:3200,img:'https://i.postimg.cc/4x2bqbdM/ariel-top-load.jpg',description:'3.2 liters. Expiry: 18 months → 06.2025.'},
  {id:7,name:'Ariel Detergent Liquid Front Load',price:3200,img:'https://i.postimg.cc/9fFXRZYW/ariel-front-load.jpg',description:'3.2 liters. Expiry: 18 months → 07.2025.'},
  {id:8,name:'Ariel Detergent Liquid Lavender Front Load',price:3600,img:'https://i.postimg.cc/Kvw8W1bf/ariel-front-lav.jpg',description:'3.6 liters. Expiry: 18 months → 07.2025.'},
  {id:9,name:'Ariel Detergent Liquid Lavender Top Load',price:3600,img:'https://i.postimg.cc/FzqNwBMz/ariel-top-lav.jpg',description:'3.6 liters. Expiry: 18 months → 07.2025.'},
  {id:10,name:'Mysore Sandal Soap',price:450,img:'https://i.postimg.cc/GtP6xSb6/mysore-sandle.jpg',description:'3 soaps × 150g = 450gms. Expiry: 3 years → June 2028.'}
];

// API endpoint
app.get('/api/products', (req,res) => res.json(products));

// Serve frontend files
app.use(express.static(path.join(__dirname, '/')));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'flizbee.html')); // <-- use your file name here
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
