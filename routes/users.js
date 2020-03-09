const express = require('express');
const router = express.Router();
const passport = require('../passport')

/* GET users listing. */
router.post('/signup', (req, res, next) => {

  passport.authenticate('local-signup', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: error || "ooops, something happened"
      });
    }
    
    req.logIn(user,function(error) {
      if(error){
        return es.status(500).json({
          message: error || "ooops, something happened"
        });
      }
      user.isAuthenticated = true;

      return res.json(user); 
    });

  })(req, res, next);
});

router.post('/signin', function (req, res, next) {
  passport.authenticate('local-signin', function (error, user, info) {

    if (error) {
      res.status(500).json({
        message: error || "ooops, something happened"
      });
    }
    
    req.logIn(user,function(error) {
      if(error){
        return res.status(500).json({
          message: error || "ooops, something happened"
        });
      }
      user.isAuthenticated = true;
      
      return res.json(user);  

    });
  })(req, res, next);
});

router.get('/api', (req,res) => {
  res.json({
    message:"hello world"
  });
});

module.exports = router;
