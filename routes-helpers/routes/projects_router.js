const router = require('express').Router();
const db = require('../models/models.js');
const restricted = require('../auth/restricted_middleware');

//MUST CREATE UPDATE

router.get('/', restricted, (req, res) => {
    return db.findProject()
        .then(project => {
            res.status(200).json({ loggedInUser: req.user.username, project })
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve projects list, make sure you are logged in.' })
        })
})//gives full list of project

router.get('/public', (req, res) => {
    return db.findProject()
        .then(project => {
            res.status(200).json({ project})
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve projects list.' })
        })
})//PUBLIC ROUTE: gives full list of project

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params
    return db.findProjectById(id)
        .then(project => {
            res.status(200).json({ loggedInUser: req.user.username, project })
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve project.' })
        })

})//gives project by id 

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params
    db.removeProject(id)
        .then(project => {
            if (project !== 0) {
                res.status(201).json(project)
            } else {
                res.status(404).json({ message: 'unable to remove project, possible token error' })
            }
        })
})// deletes project from database

router.post('/', restricted, (req, res) => {
    const project = req.body
    return db.addProject(project)
        .then(created => {
            res.status(201).json(created)
        }).catch(error => {
            res.status(500).json({ message: 'failed to add project' })
        })
})// add project to database

router.put('/:id', restricted, (req, res) => {
    const {id} = req.params
    const body = req.body
    db.updateProject(id, body)
    .then(project => res.json(project))
    .catch(error => {
        res.status(500).json({message: 'update failed'})
    })
})// update

module.exports = router;