const express = require('express');
const app = express();
app.get('/parking', (req,res) => { res.send("Liste des parkings") })
app.listen(8080, () => {    console.log("Serveur à l'écoute")})
