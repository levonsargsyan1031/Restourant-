const route = require('express').Router()
const connection = require("../connection").db;

route.post('/', async (req,res)=>{
    
    const body = req.body;
    connection.query(`SELECT * FROM customers where DATE(date) = ?;`,[body.date],(error,result,fields)=>{
        res.json(result)
      
    })
    
})
module.exports = { route };