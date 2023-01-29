const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../../../private.env'})

const Authmiddleware = async (req,res, next) => {
    
    const authheader = req.headers.authorization

    if (!authheader || !authheader.startsWith("Bearer ")) {
        res.status(401).json({'Error':'Unauthorized token'})
    }

    try {
        
        const token = authheader.toString().split(' ')[1]
        const decoded = jwt.verify(token, "PRIVATEKEYDEMO")

        const {id, username} = decoded

        req.user = {id, username}

        next()
    } catch(error) {
        res.status(401).json({'Error':'error'})
    }
    
}

module.exports = Authmiddleware