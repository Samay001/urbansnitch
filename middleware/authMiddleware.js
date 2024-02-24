import JWT from "jsonwebtoken";

//protect routes token based
export const requireSignIn = async (req, res, next) => {
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    }
    catch(err){
        console.error(err);
    }
};