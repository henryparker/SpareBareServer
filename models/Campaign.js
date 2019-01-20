const mongoose = require('mongoose');
const {Schema} = mongoose;

const campaignSchema = new Schema({
    FacebookID: { type: Schema.Types.ObjectId, ref: 'User' },
    Title: String,
    Descrition:String,
    ImageURL:String
},{strict:false})

mongoose.model('campaignSchema',campaignSchema);