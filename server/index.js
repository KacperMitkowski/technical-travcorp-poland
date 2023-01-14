const express = require("express");
const data = require("./data.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/:amount", (req, res) => {
    const amount = req?.params?.amount || 10;
    
    res.header("Content-Type",'application/json');
    
    const result = JSON.stringify(data.slice(0, amount));
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});