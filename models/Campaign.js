const mongoose = require("mongoose");
var Float = require("mongoose-float").loadType(mongoose);
const { Schema } = mongoose;

const campaignSchema = new Schema(
  {
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    Title: String,
    Descrition: String,
    ImageURL: String,
    currentAmountRaised: { type: Float, default: 0 }
  },
  { strict: false }
);

mongoose.model("campaignSchema", campaignSchema);
