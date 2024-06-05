
import { Schema , model , models } from 'mongoose'

const empSchema = new Schema({
    email : {
        type : String,
        required : [true , `email can't be empty`]
    },
    password : {
        type : String,
        required : [true , `password can't be empty`]
    }
})

export const Emp = models.employee || model('employee' , empSchema)