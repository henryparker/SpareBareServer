const mongoose = require('mongoose');
const Campaign = mongoose.model('campaignSchema');
const requireLogin = require('../middlewares/requireLogin');
const plaid = require('plaid');
const moment = require('moment');
const keys = require('../config/keys');

let client = new plaid.Client(
     keys.PLAID_CLIENT_ID,
     keys.PLAID_SECRET_KEY,
     keys.PLAID_PUBLIC_KEY,
    plaid.environments.sandbox,
    {version: '2018-05-22'}
)

module.exports = app =>{
    app.post('/banking',async(req,res)=>{
        console.log(req.body)
        publicToken = req.body.publicToken;
        client.exchangePublicToken(publicToken, async(error,tokenResponse)=>{
            if (error != null) {
                var msg = 'Could not exchange public_token!';
                console.log(msg + '\n' + JSON.stringify(error));
                
              }
            const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
            const curDate = moment().format('YYYY-MM-DD')
            let allAccount = await client.getAccounts(tokenResponse.access_token);
            console.log(allAccount);
            console.log("==============================================================")
            let allTransaction = await client.getAllTransactions(tokenResponse.access_token,startOfMonth,curDate);
            console.log(allTransaction)
            let totalSpare = 0 
            await allTransaction.forEach((val)=>{
                if(val.amount && val.amount>0){
                    totalSpare+= (Math.ceil(val.amount)-val.amount)}
                }
                
            );
            res.json(totalSpare)

        })
    })

}