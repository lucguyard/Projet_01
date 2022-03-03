const express = require('express');
const fs = require('fs').promises;
const app = express();
const bodyParser = require("bodyParser");

app.use



app.use(express.json());



app.use('/',(req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/test', (req, res, next) => {
  const stuff = [
    {
      name: 'oeihfzeomi',
      mail: 'Mon premmier objet',
      nam: 'Les infos mde mon premier objet',
    },
    {
      name: 'oeihfzeoi',
      mail: 'Mon premier objet',
      nam: 'Les infos de mon premier objet',
    },
  ];
  res.status(200).json(stuff);
  next();
})

app.get('/index/',(req,res,next)=> { 
  fs.readFile(__dirname + "/index.html")
   .then(contents => {
     res.setHeader("Content-Type", "text/html");
     res.writeHead(200);
     res.end(contents);
   })
   .catch(err => {
     res.writeHead(500);
     res.end(err);
     return;
   });
});


app.post('/test' ,(req,res,next) =>{
  console.log(req.body);
})






module.exports = app