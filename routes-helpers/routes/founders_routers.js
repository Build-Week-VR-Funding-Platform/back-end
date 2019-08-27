const router = require('express').Router();
const db = require('../models/models.js');
const restricted = require('../auth/restricted_middleware')

//MUST CREATE UPDATE

router.get('/founders', restricted, (req, res) => {
    return db.findFounder()
        .then(founder => {
            res.status(200).json({ loggedInUser: req.founder.username, founder })
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve founders list, make sure you are logged in.' })
        })
})//gives full list of founders 

router.get('/founders/:id', restricted, (req, res) => {
    const { id } = req.params
    return db.findFounderById(id)
        .then(founder => {
            res.status(200).json({ loggedInUser: req.user.username, founder })
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve founder.' })
        })

})//gives founder by id 

router.delete('/founders/:id', restricted, (req, res) => {
    const { id } = req.params
    db.removeFounder(id)
        .then(founder => {
            if (founder !== 0) {
                res.status(201).json(founder)
            } else {
                res.status(404).json({ message: 'unable to remove founder, possible token error' })
            }
        })
})// deletes founder from database

router.post('/founders', restricted, (req, res) => {
    const founder = req.body
    return db.addFounder(founder)
        .then(created => {
            res.status(201).json(created)
        }).catch(error => {
            res.status(500).json({ message: 'failed to add founder' })
        })
})// add founder to database

router.put('/founders/:id', restricted, (req, res) => {
    const { id } = req.params
    const body = req.body
    db.updateFounder(id, body)
        .then(founder => res.json(founder))
        .catch(error => {
            res.status(500).json({ message: 'update failed' })
        })
})// update

module.exports = router;