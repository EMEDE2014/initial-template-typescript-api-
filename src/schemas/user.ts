
import { Schema, model } from "mongoose";

const User = new Schema({
    email: String,
    firstName: String,
    lastName: String
})

export default model('User', User);