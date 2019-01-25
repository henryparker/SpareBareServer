
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
module.exports = app =>{
    app.post('/auth/newUser',async(req,res)=>{
        const existingUser = await User.findOne({ FacebookID: req.body.id });
  
        if (!existingUser) {
            const user = await new User({
                FacebookID: req.body.id,
                name: req.body.name,
                birthday:req.body.birthday,
                email:req.body.email,
                picture:req.body.picture
            }).save();
            res.json(user)
        }else{
            res.json(existingUser)
        }
        

    })

    app.get('/tmp',async(req,res)=>{
        console.log("HI")
        res.json({"name":"I am your father"})
    })
    // app.get('/auth/google',
    //     passport.authenticate('google',{
    //         scope: ['profile', 'email']
    //       })
    // ,()=>{console.log("from login")});
    
    // app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
    //     console.log('from auth callback');
    //     // res.send(req.user);
    //     res.redirect('/');     
        
    // });

    // app.get('/auth/logout',(req,res)=>{
    //     console.log('from logout');
    //     req.logout();
    //     res.redirect('/');
    // })

    // app.get('/auth/current_user', (req, res) => {
    //     console.log('from current user');
    //     res.send(req.user);
    //   });
}


