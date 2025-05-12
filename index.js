const express = require('express')
const mongoose = require('mongoose');
const characterRoute = require("./routes/character.route.js");
const raceRoute = require("./routes/race.route.js")
const roleRoute = require("./routes/role.route.js")
const app = express()

app.use(express.json());

// Middleware para imprimir as requisições no terminal
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});


//Routes
app.use("/api/characters", characterRoute);
app.use("/api/races", raceRoute);
app.use("/api/roles", roleRoute);

//Connection with MondoDB
mongoose.connect('mongodb+srv://test:oQXmjStLFf1u9zVx@backenddb.gxkhzmd.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log("Connection Failed")
});