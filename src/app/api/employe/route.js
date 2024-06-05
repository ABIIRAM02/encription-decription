import jwt from "jsonwebtoken";

export const POST = async (req, res) => {
  const userData = await req.json();
  const SECRECT_KEY = 'hakunamatata!!'

  if (
    userData.email === "abiramofficial002@gmail.com" &&
    userData.password === "abi@Trackability02" //  check according to your needs , eg : fetcch from DB & validate
  ) {
    const token = jwt.sign({ userData }, SECRECT_KEY);
    return new Response(JSON.stringify({token}), { status: 200 });
  } else {
    return new Response(JSON.stringify("invalid credentials"), { status: 400 });
  }

  
};
