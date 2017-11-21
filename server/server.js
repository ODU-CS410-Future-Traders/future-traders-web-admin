const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(`${__dirname}/../views/partials`);
app.set('view engine', 'hbs')
  .use(express.static(path.join(`${__dirname}/../public`)));

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
