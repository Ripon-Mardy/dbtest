import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: {
        type : String,
        required : true
    },
    answer: {
        type : String,
        required : true
    }
})

const FaqModel = mongoose.models.Faq || new mongoose.model("Faq", faqSchema);

export default FaqModel