const express = require('express')
const app = express()
const csv = require("csvtojson");
const port = 7777
const fs = require('fs');
const filePath = 'Store/';


app.get('/', async (req, res) => {
  console.log("Request Received: ", req);
  /* 
    Use to figure out which fileName to pick data from req.
    Going forward we can remove the csv.fromFile to some database querry 
  */
  const fileName = "12-May-2022-weekly-expiryDAYdata__VEGE_NF_AND_BNF_Options.csv";
  const jsonArray = await csv().fromFile(filePath+fileName);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(jsonArray);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
