const express = require("express");
const app = express();

app.get("/sum",(req,res)=>{
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.listen(8080);