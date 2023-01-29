const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../../../private.env'})

const login = async (req,res) => {
    
    const { username, password } = req.body

    if (!username || !password) {
        res.json({"msg":"Please set a username or password"})    
    } 

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, "PRIVATEKEYDEMO", {expiresIn: '30d'})

    res.status(201).send({'Response': 'user created', 'authorization-token':token})
}

const dashboard = async (req,res) => {

    try {
        const text = "Welcome " + req.user.username + " to the secret dashboard"
        const number = Math.floor(Math.random() * 99)
        res.status(200).json({'msg':text,'random number': number, 'id':req.user.id})
    } catch (error) {
        res.status(400).json({'error':error, 'number':'no number'})
    }

}

module.exports = { login, dashboard }