db = require('../database/dbConfig.js')

module.exports = {
    register,
    findBy,
    
}

function register(user) {
    return db('users').insert(user, "id")
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });


}

function findBy(username){
    return db('users').where({username}).first()
}

function findById(id){
    return db('users').select('id', 'username').where({id}).first()
}