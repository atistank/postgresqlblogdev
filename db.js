const sequelize = require('sequelize')

const db = new sequelize({

    database: "d8r2m4irt7a3pu",
    username: "okwloigjfhaygu",
    password: "c85aa771148bb518ca0e16c33bb5781aded07194e5cf0d91db919f77b6a20699",
    host: "ec2-54-225-237-64.compute-1.amazonaws.com",
    port: 5432,
    dialect: 'postgres'
})

// ham kiem tra test ket noi
db.authenticate()
  .then( function(){ console.log( 'ket noi thanh cong' )})
  .catch(err => console.log( err.message )


// dinh nghia table
const User = db.define('User',{

    username: sequelize.STRING,
    password: sequelize.STRING

})

module.exports = User