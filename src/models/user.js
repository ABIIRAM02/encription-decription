import { Schema , model , models } from "mongoose";

const userSchema = new Schema({
    userData : {
        type : String,
        required : [true , 'userData is required to save in DB']
    }
})

export const User = models.user || model('user' , userSchema)