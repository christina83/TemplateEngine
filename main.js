// Hauptprogramm, das die Template Engine aufruft
const express = require('express');
const app = express();
const TemplateEngine = require('./template_engine');

app.set('view engine', 'ejs');



console.log(TemplateEngine.render("./views/page.ejs", {
    Greeting: "Hello everyone"
    }));
