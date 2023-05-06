const express = require('express');
const app = express();
app.use(express.static('public'));


// create an absolute path pointing to a folder called 'views'
app.set('views', __dirname + 'views');


// tell our Express app that HBS will be in charge of rendering the HTML:
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');




app.listen(3000, () => console.log('App works!!!'))