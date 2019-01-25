const mongoose = require('mongoose');
const Campaign = mongoose.model('campaignSchema');
const requireLogin = require('../middlewares/requireLogin');
module.exports = app =>{
    app.get('/savedChart',requireLogin, async (req,res)=>{
        const chart = await Chart.find({ _user: req.user.id });
        res.send(chart);
    })

    app.post('/campaign',requireLogin,async(req,res)=>{
        console.log(req.body)
        const campaign = await new Campaign({
            _user: req.body.auth.info._id,
            Title: req.body.data.Title,
            Description:req.body.data.Description,
            ImageURL:req.body.data.URL
        }).save();
        res.json(campaign);
    })

    app.delete('/savedChart',requireLogin,async(req,res)=>{
        await res.send(req.body);
        Chart.find({_id:req.body.id}).deleteOne().exec();
    })

  
    app.get('/campaign',async(req,res)=>{
        const campaignList = await Campaign.find();
        res.json(campaignList);
        console.log("done");
    })
}