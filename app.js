const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server listening on PORT ', PORT);
});
