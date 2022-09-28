import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/user'

const app = express();

app.use(cors())
// add log in the console
app.use(morgan('dev'))
// allow client send json format
app.use(express.json())
// take encoded into an object
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
  res.status(200)
  res.json({message: 'hello'})
})

// add protect from module auth
app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/signin', signIn)

export default app