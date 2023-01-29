const express = require('express')
const router = express.Router()
const Authmiddleware = require('../middleware/auth')
const { login, dashboard } = require('../controllers/main')


router.route("/dashboard").get(Authmiddleware, dashboard)
router.route("/login").post(login)

module.exports = router