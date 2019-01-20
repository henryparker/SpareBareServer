const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Campaign = mongoose.model('campaignSchema');

module.exports = app =>{
    app.get('/savedChart',requireLogin, async (req,res)=>{
        const chart = await Chart.find({ _user: req.user.id });
        res.send(chart);
    })

    app.post('/campaign',async(req,res)=>{
        console.log(req.body)
        // const campaign = await new Campaign({
        //     FacebookID: res.body.id,
        //     Title: res.body.Title,
        //     Description:res.body.Description,
        //     ImageURL:res.body.URL
        // }).save();
        // res.send(campaign);
    })

    app.delete('/savedChart',requireLogin,async(req,res)=>{
        await res.send(req.body);
        Chart.find({_id:req.body.id}).deleteOne().exec();
    })

    
}