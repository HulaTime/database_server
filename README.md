#####Database Server

- I have decided to create this database server using nodejs because I have not used it very often and it is popular enough I feel it is important to understand how to use.

- To begin I made sure I had node and npm installed

- I then used `npm init` to generate a package.json file

- I have decided to use express as the framework for this project due to its flexibility

- I installed express with `npm install --save-dev express`

- I created a server.js file from which I will be running the server

- Express has a built in middleware for serving static files like css, images and javascripts. If you keep all your static files in a single directory (like a normal person) you can access them like so:
```
var express = require('express');
var app = express();

app.use(express.static('public'));
```

- 