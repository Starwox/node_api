const express = require('express');
const parkings = require('./parkings.json');
const app = express();
app.get('/parkings', (req,res) => {    
    res.status(200).json(parkings)
});
app.listen(8080, () => {    console.log("Serveur à l'écoute")})
app.get('/parkings/:id', (req,res) => {    
    const id = parseInt(req.params.id)    
    const parking = parkings.find(parking => parking.id === id)   
    res.status(200).json(parking)
})