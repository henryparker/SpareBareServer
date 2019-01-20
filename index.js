const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/dev');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

require('./models/User');
require('./models/FavoriteChart');
require('./models/Campaign');
require('./services/passport'); 
 const User = mongoose.model('users');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
require('./routes/chartRoute')(app);
require('./routes/campaignRoute')(app);
const PORT = process.env.PORT || 3000;
console.log("server running on ",PORT)
app.listen(PORT);