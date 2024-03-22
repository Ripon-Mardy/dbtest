import database from "@/db/db";
import contactModel from "@/models/ContactModel";

database(); // connnect to database

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      const formData = new contactModel({ name, email, message });
      await formData.save();
      res.status(501).json({ sucess: true, data: formData });
    } catch (error) {
      console.log(error);
      res.status(501).json({ success: false, error: "server Error" });
    } // end try catch
  } else {
    res.status(401).json({ success: false, error: "method not allowed" });
  } // end if else statement
}
