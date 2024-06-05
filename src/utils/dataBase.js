import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async ( req ,res ) => {
    mongoose.set('strictQuery' , true)

    if(isConnected){
        console.log('MongoDB already connected');
        return ;
    }

    try {

        await mongoose.connect(process.env.DB_URI , {
            dbName : 'encryption-practice-users',
            useNewUrlParser : true,
            useUnifiedTopology : true
        }).then( () => {
            isConnected = true;
            console.log('DB connected');
        } )
        
    } catch (error) {
        console.log(error.message);
    }
}