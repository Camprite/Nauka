const express = require('express')
const app = express()
const path  = require('path')
app.use(express.static("public"));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });