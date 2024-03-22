import mongoose from "mongoose";

const database = async () => {
    try {
        const dbUrl = process.env.MONGO_URL;
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default database