const express = require('express');
const app = express();
app.use(express.static('public'));


// create an absolute path pointing to a folder called 'views'
app.set('views', __dirname + 'views');


// tell our Express app that HBS will be in charge of rendering the HTML:
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// 1. send views/index.hbs for displaying in the browser
// 2. Add additional parameter that will contain a JS object with info we can use in the view
// app.get('/', (req, res, next) => {
//   let data = {
//     name: 'Kseniia',
//     bootcamp: 'Ironhack Web Dev'
//   };

//   res.render('index', data);
// })

// 3. The if block helper - if its argument returns false, undefined, null, "", 0, or [], Handlebars will not render the block 
app.get('/', (req, res, next) => {
  let data = {
    name: 'Kseniia',
    lastName: 'Ernest'
  };

  res.render('index', data);
})



app.get('/about', (req, res, next) => res.render('about'));






app.listen(3000, () => console.log('App works!!!'))