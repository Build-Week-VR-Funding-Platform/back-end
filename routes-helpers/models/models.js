const knex = require('knex');
const knexConfig = require('../../knexfile.js');

const db = knex(knexConfig.development)

module.exports = {
    findFounder,
    findProject,
    findBy,
    findFounderById,
    findProjectById,
    addFounder,
    addProject,
    removeFounder,
    removeProject,
    updateFounder,// need to create
    updateProject,// need to create
}

function findFounder() {
    return db('founders')

} //get full list of created founders

function findProject() {
    return db('projects')

}//get full list of created founders

function findBy(body) {
    return db('founders').where(body)
} //login

function findFounderById(id) {
    return db('founders')
        .where({ id })
        .first()
}//get founder by id
function findProjectById(id) {
    return db('projects')
        .where({ id })
        .first()
}//get founder by id

function addFounder(founders) {
    return db('founders')
        .insert(founders)
        .then(ids => ({
            id: ids[0]
        }))
} //create new founder

function addProject(projects) {
    return db('projects')
        .insert(projects)
        .then(ids => ({
            id: ids[0]
        }))
} //create new project

function removeFounder(id) {
    return db('founders')
        .where('id', Number(id))
        .del()
}// delete specific founder by id

function removeProject(id) {
    return db('projects')
        .where('id', Number(id))
        .del()
}// delete specific project by id

function updateFounder(id, founders) {
    return db('founders')
    .where('id', Number(id))
    .update(founders)
}// NEED TO CREATE

function updateProject(id, projects) {
    return db('projects')
    .where('id', Number(id))
    .update(projects)
}// NEED TO CREATE