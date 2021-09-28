import express from 'express'
import  Mongoose  from 'mongoose'

import authRouter from './router/auth.router.js'

const PORT = process.env.PROT || 5000 
const app = express()
const BD_URL = `mongodb+srv://user:user@cluster0.tejjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use('/auth', authRouter)

    const start = () => {
        app.listen(PORT, async () =>{
    try{
        await Mongoose.connect(BD_URL)
    
        console.log(`Server working ${PORT}`)
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
          
        })
    }
    start()