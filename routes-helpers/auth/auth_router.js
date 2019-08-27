const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const secret = require('../../config/secret.js');
const db = require('../models/models.js');



router.post('/reg', (req, res) => {
    const founder = req.body
    const hash = bcrypt.hashSync(founder.password, 10)
    founder.password = hash
    return founders.addFounder(founder)
        .then(created => {
            res.status(201).json(created)
        }).catch(error => {
            res.status(500).json({ message: 'failed to add new founder' })
        })
})// Founder registration


router.post('/login', (req, res) => {
    let { password, username } = req.body
    founders.findBy({ username })
        .first()//takes first item out of object
        //passing it the password guess in plain text and the password hash obtained from the database to validate credentials.
        //If the password guess is valid, the method returns true, otherwise it returns false.The library will hash the password guess first and then compare the hashes
        .then(founder => {
            if (founder && bcrypt.compareSync(password, founder.password)) {
                const token = generateToken(founder)
                res.status(200).json({ message: `Hello ${founder.username}, You've successfully logged in`, token })
            } else {
                res.status(401).json({ message: 'invalid login info, try again.' })
            }
        }).catch(error => {
            res.status(500).json({ message: 'Hey backend, you messed up, login failed' })
        })
})// founder login



function generateToken(founder) {
    const payload = {
        subject: founder.id,
        username: founder.username,
    }
    const option = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secret.jwtSecret, option)
}

module.exports = router;