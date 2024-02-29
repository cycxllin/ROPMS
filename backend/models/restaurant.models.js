import mongoose from "mongoose";

// no order list as this could potentially get very large
// lookup orders through orders collection by custID instead
const RestaurantSchema = new mongoose.Schema(
    {
        _id: {type: Number, required: true},
        name: {type: String, required: true},
        lName: {type: String, required: true},
        phone: {type: String, required: true},
        menu: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
      }
);

export default mongoose.model("Restaurant", RestaurantSchema);