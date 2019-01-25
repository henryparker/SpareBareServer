const mongoose = require('mongoose');
const Subscription = mongoose.model('subscriptionSchema');
const requireLogin = require('../middlewares/requireLogin');
const queryString = require('query-string');
module.exports = app =>{
    app.post('/subscription',requireLogin,async(req,res)=>{
        console.log(req.body)
        console.log("adding====================================")
        const newSubscription = await new Subscription({
            _user: req.body.auth.info._id,
            subscribeToCampaign: req.body.data,
        }).save();

        res.json("add it");
    })

    app.delete('/subscription',requireLogin,async(req,res)=>{
        console.log(req.body)
        // console.log(queryString.parseUrl(req.url).query.get("auth[info][_id]"));
        console.log("deleting====================================")
        Subscription.find({_user:req.body.auth.info._id, "subscribeToCampaign": req.body.data}).deleteMany().exec()
        res.send("remove it")
    })

  
    app.get('/subscription',async(req,res)=>{
        console.log(req.headers);
        if (req.headers.auth){
            const subscriptionList = await Subscription.find({_user:req.headers.auth}).select("subscribeToCampaign");
            console.log(subscriptionList);
            res.json(subscriptionList);
        }
       
        console.log("done");
    })
}