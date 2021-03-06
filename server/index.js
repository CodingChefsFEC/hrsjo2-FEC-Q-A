const express = require('express');
const compression = require('compression');
let app = express();
let db = require('../database/index.js');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3001;

//app.use('/', express.static(__dirname + '/../client/dist'));
// app.use(express.static(__dirname + '/../client/dist'));
// app.use('/', express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());


app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));


app.get('/:id', (req, res) => { res.sendFile(path.join(__dirname + '/../client/dist/index.html')); })


// app.get('/api/:id/file', (req, res) => {
//   console.log('I am here');
//   console.log(__dirname + '/../client/dist/index.html');
//   var options = {
//     root: path.join(__dirname, '/../client/dist')
//   }
//   var pathdir =path.join(__dirname, '/../client/dist/index.html')
//   res.sendFile(pathdir);
// })


//Retrieve Question and Answer information
app.get('/api/getData/:id/', function (req, res) {
  console.log(req.params.id);
  var productId = req.params.id;
  //console.log(req.params);
  console.log(req.query);
  var {sortby}= req.query;
  //console.log(req.body);
  db.find({productId: productId, sortby:sortby}, (qa) => {
    console.log('I am here', qa.length);
    res.send(qa[0]);
  });
});

app.post('/api/question/:id/', function (req, res) {
  //console.log(req);
  var productId = req.params.id;
  var queObj = req.body;
  console.log('queObj', queObj);
  db.saveQuestion({productId:productId, queObj:queObj}, (qa) => {
    console.log('I am here', qa.length);
    res.send(qa);
  });
});

app.post('/api/answer/:id/', function (req, res) {
  //console.log(req);
  var productId = req.params.id;
  var {questionId} = req.body;
  var {ansObj} = req.body;
  console.log('ansObj', req.body);
  db.saveAnswer({productId:productId, questionId:questionId, ansObj:ansObj}, (qa) => {
    console.log('I am here', qa.length);
    res.send(qa);
  });
});

app.post('/api/flag/:id/', function (req, res) {
  //console.log(req);
  var productId = req.params.id;
  var {questionId} = req.body;
  var {answerId} = req.body;
  var {flag} = req.body;
  console.log('ansObj', req.body);
  db.saveFlag({productId:productId, questionId:questionId, answerId:answerId, flag:flag}, (qa) => {
    console.log('I am here', qa.length);
    res.send(qa);
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});