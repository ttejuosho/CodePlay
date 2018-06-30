const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


// Basic route that sends the user first to the AJAX Page
app.get("/paycalc", function(req, res) {
    res.sendFile(path.join(__dirname, "public/paycalc.html"));
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "public/taiwotejuosho.html"));
});

app.get("/chase", function(req, res) {
    res.sendFile(path.join(__dirname, "public/chase.html"));
});

app.listen(PORT, () => console.log('Server started...'));