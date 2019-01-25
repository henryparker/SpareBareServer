const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');


require('./models/User');
require('./models/Campaign');
require('./models/Subscription');
 const User = mongoose.model('users');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send("server has started")
});

require('./routes/authRoute')(app);
require('./routes/campaignRoute')(app);
require('./routes/bankingRoute')(app);
require('./routes/subscriptionRoute')(app);

const PORT = process.env.PORT || 3000;
console.log("server running on ",PORT)
app.listen(PORT);