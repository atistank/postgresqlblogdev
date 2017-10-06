const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const User = require('./db.js')

app.use(bodyParser.urlencoded({extended: true}))
// cau hinh root
app.get('/',(req,res)=> res.send('wellcome web cua tui'))

app.post('/add',(req,res)=>{
const user = req.body.u
const pass = req.body.p
User.create({
     username: user,
     password: pass
    
}).then(() => res.json({'ketqua': 1}))
.catch(() => res.json({'ketqua': 0}))
})

app.post('/read',(req,res)=> {
    User.findAll()
    .then(users => res.json({'ketqua': 1, 'users': users}))
    .catch(() => res.json({'ketqua': 0}))

})
app.post('/update',(req,res)=>{
        const {id, u, p} = req.body
        User.update({
                username: u,
                password: p

        },{
                where: {id: id}

        }).then(row => res.json({'ketqua': 1, 'row': row[0]}))
     .catch(() => res.json({'ketqua': 0}))

})//
app.post('/delete',(req,res)=>{
    const {id} = req.body
    User.destroy({
        where: {id: id}
    })

})

//tao port lang nghe cac ket noi
app.listen(process.env.PORT || 3000, ()=>console.log('sever da khoi dong'))

////