const express = require('express')
const router = express.Router()


router.get('/', (rey, res) => {
    res.render('index')
})

module.exports = router