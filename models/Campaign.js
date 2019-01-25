const mongoose = require('mongoose');
const {Schema} = mongoose;

const campaignSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    Title: String,
    Descrition:String,
    ImageURL:String
},{strict:false})

mongoose.model('campaignSchema',campaignSchema);