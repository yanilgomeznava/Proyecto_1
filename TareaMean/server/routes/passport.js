// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/usuario.model');



// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        nombreField: 'nombre',
        emailField: 'email',
        universidadField: 'universidad',
        carneField: 'carne',
        mallaField: 'malla',
        esProfesorField: 'esProfesor',
        usernameField: 'userName',
        passwordField: 'pass',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, userName, password, done) {

            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function () {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'userName': userName }, function (err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'El nombre de usuario ya existe.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.userName = userName;
                        newUser.nombre = req.body.nombre;
                        newUser.pass = newUser.generateHash(password);
                        newUser.universidad = req.body.universidad;
                        newUser.email = req.body.email;
                        newUser.malla = req.body.malla;
                        newUser.carne = req.body.carne;                        
                        if (req.body.esProfesor == "Profesor"){
                            newUser.esProfesor = true;
                        }
                        else{
                            newUser.esProfesor = false;
                        }
                        

                        // save the user
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });

                    }

                });

            });

        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'userName',
        passwordField: 'pass',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, userName, pass, done) { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ 'userName': userName }, function (err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No se encontró al usuario.')); // req.flash is the way to set flashdata using connect-flash

                // if the user is found but the password is wrong
                if (!user.validPassword(pass))
                    return done(null, false, req.flash('loginMessage', 'Password equivocado.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, user);
            });

        }));

};






