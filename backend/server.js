const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express();

const uri = "mongodb+srv://mraj:test@recipeBook.7nm3n.mongodb.net/recipeBook?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  })


app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/recipes')
})

app.get('/recipes',  (req, res) => {
  res.status(200).json({recipe: "this is an example recipe"})
});

app.post('/recipes/create', () => {
  res.json({create:"this is the create recipe page"}) 
});








