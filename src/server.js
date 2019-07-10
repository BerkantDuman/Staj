//jshint esversion:6

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/userLogin')));

app.use(bodyParser.json()); // Body parser use JSON data
app.use(bodyParser.urlencoded({
  extended: true
}));


// Define database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '36550024814',
  database: 'mydb'
});

//connection to database
conn.connect((err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log('DB conneting error');
  }
});



//GET PERSON WITH PRODUCT
app.get('/products/:id', function(request, response) {
  let sql = "SELECT * FROM  products INNER JOIN people ON people.product_id = products.id WHERE people.id = ?" ;
  conn.query(sql, [request.params.id], (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});



//GET ALL PEOPLE
app.get('/people', function(request, response) {
  conn.query('SELECT * FROM people', (error, rows, fields) => {
    if (!error) {
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});

//GET By ID
app.get('/people/:id', function(request, response) {
  conn.query('SELECT *FROM people WHERE id = ? ', [request.params.id], (error, rows, fields) => {
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
      response.send("deleted");
    } else {
      console.log(error);
    }
  });
});

//INSERT
app.post('/people', function(request, response) {
  let emp = request.body;
  var sql = "INSERT INTO people (firstName, lastName, street, state, city, zip, product_id) VALUES ?";
  var value = [
    [emp.firstName, emp.lastName, emp.street, emp.state, emp.city, emp.zip, emp.product_id]
  ]
  conn.query(sql, [value], (error, fields) => {
    if (!error) {
      response.send("Added new person");
    } else {
      console.log(error);
    }
  });
});

//UPDATE
/*app.put('/people/:id',(req, res) => {
  let emp = request.body;
  let sql = "UPDATE product SET firstName ='"+emp.firstName+"', lastName='"+emp.lastName+"', street='"+emp.street+"', city='"+emp.city+"', state='"+emp.state+"', zip='"+emp.zip+"' WHERE id="+req.params.id;
  conn.query(sql, (error, fields) => {
    if (!error) {
      response.send("Updated new person");
    } else {
      console.log(error);
    }
  });
});*/


app.listen(5000, function() {
  console.log('Example app listening on port 4000');
});

module.exports = app;
