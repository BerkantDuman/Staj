//jshint esversion:6

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.json()); // Body parser use JSON data
app.use(bodyParser.urlencoded({
  extended: true
}));


// Define database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '36550024814',
  database: 'db'
});



//connection to database
conn.connect((err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log('DB conneting error');
  }
});


//GET ALL 
app.get('/people', function (request, response) {
  conn.query('SELECT * FROM  products INNER JOIN people ON people.product_id = products.id', (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});

//INSERT DATA
app.post('/people', function(request, response) {
  let emp = request.body;
  var sql = "INSERT INTO people (name, lastname, address, product_id) VALUES ?";
  var value = [
    [emp.name, emp.lastname, emp.address, emp.product_id]
  ]
  conn.query(sql, [value], (error,rows, fields) => {
    if (!error) {
      response.send(JSON.stringify(rows));
    } else {
      console.log(error);
    }
  });
});

//GET By ID
app.get('/people/:id', function(request, response) {
  conn.query('SELECT * FROM  products INNER JOIN people ON people.product_id = products.id WHERE people.id = ? ', [request.params.id], (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});

// Delete
app.delete('/people/:id', function(request, response) {
  conn.query('DELETE  FROM people WHERE id = ?', [request.params.id], (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});

//UPDATE
app.put('/people', (request, response) => {
  let emp = request.body;
  var value = [emp.name, emp.lastname, emp.address, emp.id];
  let sql = 'UPDATE people SET name=?, lastname=?, address=?  WHERE id=?';

  conn.query(sql, value, (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});



app.listen(3000, function () {
  console.log("Server running on port 3000");
});