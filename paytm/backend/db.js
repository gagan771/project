const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://gaganb0514:paytm@gagan.v6g1o.mongodb.net/?retryWrites=true&w=majority");
 const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
 })

 const User = mongoose.model("user", userSchema);

 module.export = {
  user  
 }