import { User } from "@/models/user"
import { connectToDB } from "@/utils/dataBase"

export const POST = async ( req ,res ) => {

    const data = await req.json()
    
    try {

        await connectToDB()
        const newUser = new User({
            userData : data
        })
        await newUser.save()
        
        return new Response(JSON.stringify('data saved successfully'), { status: 200 })
    } catch (error) {
        return new Response('failed to save in DB', { status: 500 })
    }

}