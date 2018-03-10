const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

const api = require('./server/routes/api');

const port = 4200;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

require('./server/routes/passport')(passport); // pass passport for configuration
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/api', api);

app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname + '/src/app/login/signup.html'));

});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname + '/src/app/login/login.html'));

});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/api/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

app.get('/profile', isLoggedIn, function(req, res) {
    res.send(req.user);
});


app.get('*',(req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};