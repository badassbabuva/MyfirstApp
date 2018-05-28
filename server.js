const express = require('express');
const hbs = require('hbs');//handlebars to handle template 
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+'/views/partials');//to inject partials

hbs.registerHelper('screamIt',(text) => {

	return text.toUpperCase();
});

app.set('view engine','hbs');

app.get('/',(req,res)=>{

	res.render('index.hbs',{

		welcomeMessage: 'welcome to my first express project',
		currentYear: new Date().getFullYear()
	});

});
app.get('/contact',(req,res)=>{

	res.render('contact.hbs');

});


app.get('/about',(req,res)=>{

	res.render('about.hbs',{

		pageTitle:'About Page',
		currentYear: new Date().getFullYear()

	});

});



app.listen(port);
