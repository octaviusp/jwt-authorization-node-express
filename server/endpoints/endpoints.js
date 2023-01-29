const Authmiddleware = require('../middleware/auth')
const { login, dashboard } = require('../controllers/main')

const endpoints = [Authmiddleware, login, dashboard]

module.exports = endpoints