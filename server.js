const express = require('express');
const app = express();

app.use(express.static('static_files'));

app.listen(8080, () => {
  console.log('Server started at http://localhost:8080/');
});