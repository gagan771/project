const { JWT_SECERT} = require("./config");
const jwt = require("jsonwebtoken");
 eader = req.header.startsWith('')
const authMiddleware = ( req , res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader  || !authHeader.startsWith('Bearer')) {
        returnres.status(403).json({});

    }
    const token = authHeader.split('')[1];

    try {
        const decode = jwt.verify[token,JWT_SECERT];
       if (decoded.userId)  {req.userid = decoded.userid;
        next();
       } else {
        return res.status(403).json({});
       }

    } catch (err) {
        return res.status(403).json({});

        
    }
};
module.exports = {
    authMiddleware
}