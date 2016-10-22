var express = require('express');
var app = express();

//---------------------Routing Start-----------------------

app.use(express.static('app/public'));

// This responds with the index.html view
app.get('/', function(req, res) {
  console.log("GET /");
  res.sendFile( __dirname + "/app/views/index.html");
});

// This is the route for the form action in index.html
app.get('/process_get', function(req, res) {
  console.log("GET /process_get")

  // req.query accesses params
  console.log(req.query + '   ---parameters---')

  //prepare response in json format
  response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
    }

  console.log(response)

  res.end(JSON.stringify(response))
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

//-------------Routing End----------------