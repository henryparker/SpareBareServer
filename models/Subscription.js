const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema(
  {
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    subscribeToCampaign: { type: Schema.Types.ObjectId, ref: "Campaign" }
  },
  { strict: false }
);

mongoose.model("subscriptionSchema", subscriptionSchema);
