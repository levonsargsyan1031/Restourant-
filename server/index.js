const express = require("express");
const connection = require('./connection').db;
const cors = require('cors');
const app = express();

app.use(express.json());


const { menu,customers } = require("./routes");

app.listen(3050, () => {
    app.use(cors({
        origin: '*'
    }));
    app.use('/menuitem', menu.route)
    app.use('/customers',customers.route)
    console.log("server started 3050")


})
