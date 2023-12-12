const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const { User , Chart} = require('./models');
const { comparePassword } = require('./helpers/bcrypt');
const { signToken } = require('./helpers/jwt');
const { authentication } = require('./middleware/authentication');

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', async(req, res) => {
    try {
        console.log(req.body);
        const{email , password} = req.body
        const user = await User.create({email , password})

        res.status(201).json({user})
    } catch (error) {
        console.log(error);
        if(error.name === 'SequelizeValidationError' ||
        error.name === "SequelizeUniqueConstraintError"){
            res.status(400).json({message :error.errors[0].message})
        }else{
            res.status(500).json({message :`Internal Server Error`})
        }
    }
})

app.post("/login" , async(req , res)=>{
    try {
        const{email , password} = req.body
        const user = await User.findOne({where : {email}})

        if(!user){
            throw {message : `Invalid`}
        }

        const checkpass = comparePassword(password , user.password)

        if(!checkpass){
            throw {message : `Invalid`}
        }

        const token = signToken({id : user.id , email : user.email})

        res.status(201).json({access_token : token})
    } catch (error) {
        console.log(error);
        if(error.message === 'Invalid'){
            res.status(400).json({message :`Invalid Email/Password`})
        }else{
            res.status(500).json({message :`Internal Server Error`})
        }
    }
})

app.get('/charts',authentication, async(req, res) => {
    try {
        const chart = await Chart.findAll()
        res.status(200).json({chart})
    } catch (error) {
        res.status(500).json({message :`Internal Server Error`})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})