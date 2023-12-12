const { verifyToken } = require('../helpers/jwt')
const {User} = require('../models')

async function authentication(req , res , next){
    try {
        let verify = verifyToken(req.headers.access_token)
        let user = await User.findByPk(verify.id)
        if(!user){
            throw {message : `Unauthenticated`}
        }
        req.user={id:user.id , email:user.email}
        next()
    } catch (error) {
        switch (error.name) {
            case "Unauthenticated":
            case "JsonWebTokenError":
              res.status(401).json({ message: "Unauthenticated" });
              break;
            default:
             
              res.status(500).json({message :`Internal Server Error`})
              break;
          }
    }
}

module.exports={authentication}