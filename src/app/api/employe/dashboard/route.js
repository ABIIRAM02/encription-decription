import jwt from 'jsonwebtoken'

export const POST = async (req ,res) => {
    
    const SECRECT_KEY = 'hakunamatata!!'
    const authToken = await req.json()

    if(!authToken){
        return new Response(JSON.stringify('missing token , Retry Login'))
    }

    try {
        const decode = jwt.verify(authToken , SECRECT_KEY)
        console.log(decode);
        return new Response(JSON.stringify(decode) , { status : 200 })
    } catch (error) {
        return new Response(JSON.stringify('Invalid Token') , { status : 401 })
    }

}