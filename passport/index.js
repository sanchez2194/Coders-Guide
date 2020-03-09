const passport = require('passport');
const User = require('../models/user')
passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function (email, done) {
    User.findOne({email}).lean().exec((err, user) => {
        done(err, user);
    });
});

const FacebookStrategy = require('./FacebookStrategy');
const GoogleStrategy = require('./GoogleStrategy');
const GithubStrategy = require('./GithubStrategy');
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);
passport.use('local-facebook', FacebookStrategy);
passport.use('local-google', GoogleStrategy);
passport.use('local-github', GithubStrategy);

module.exports = passport; 