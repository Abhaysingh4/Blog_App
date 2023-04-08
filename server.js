const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv=require('dotenv')
const connectDb = require('./config/db')


const app = express()
dotenv.config()

const userRoutes=require('./routes/userRoutes')

connectDb();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/user',userRoutes)

const PORT = process.env.PORT || 8080;
const MODE = process.env.DEV_MODE;

app.listen(PORT, () => {
    console.log(`server running at port ${PORT} in ${MODE}`.bgCyan.white);
})