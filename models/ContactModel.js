import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}); // end contactSchmma

const contactModel =
  mongoose.models.Contact || new mongoose.model("Contact", contactSchema);

export default contactModel;
