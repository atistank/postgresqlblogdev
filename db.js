const sequelize = require('sequelize')

const db = new sequelize({

    database: "database1",
    username: "postgres",
    password: "1",
    host: "localhost",
    port: 5432,
    dialect: 'postgres'
})

// ham kiem tra test ket noi

// db.authenticate()
// .then(() => console.log('ket noi thanh cong'))
// .catch(err => console.log(err.message))

// dinh nghia table
const User = db.define('User',{

    username: sequelize.STRING,
    password: sequelize.STRING

})

// tao bang table
// db.sync()
// .then(() => console.log('tao model thanh cong'))

// them du lieu vao datalabase
// User.create({
//     username: 'firstUser',
//     password: 'firstPass'

// }).then(() => console.log('them data thanh cong'))
// .catch(err => console.log(err.message))


// chinh sua thong tin cua table
// User.update({
//     username: 'user1',
//     password: 'pass1'


// },{
//     // update thang co id la 1
//     where: {id: 2}

// })
// .then(row => console.log(row))
// .catch(err => console.log(err.message))

// xoa mot row trong table
// User.destroy({

//     where: {id: 2}
// })
// .then(row => console.log(row))
// .catch(err => console.log(err.message))

// tim thong tin mot row trong table
// User.find({
//     where: {id: 1}
// })
// .then(user => console.log(user.get({plain: true})))
// .catch(err => console.log(err.message))
module.exports = User