const session = require('express-session');
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/', (req, res) => {
  if (!req.session.viewCount){
    req.session.viewCount=1
  }
  else{
    req.session.viewCount++
  }
    res.render('index', {counter:req.session.viewCount});
 });
app.get('/add',(req, res) => {

    req.session.viewCount+=2
    res.render('index', {counter:req.session.viewCount});
  });
app.get('/reset', (req, res) => {
    req.session.viewCount=1
    res.render('index', {counter:req.session.viewCount});
  });


 app.listen(3000, () => console.log("listening on port 3000"));
 