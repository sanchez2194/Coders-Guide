
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')

const passport = require('./passport/index')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 3001
const log = console.log;

const app = express();
mongoose.connect('mongodb://localhost/coders-guide',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))

app.use(passport.initialize());  app.use(passport.session());
app.use('/', indexRouter);
app.use('/authentication', usersRouter);



app.listen(PORT, () => {
log(`Server is listening on PORT ${PORT}`);
  
});

module.exports = app;
