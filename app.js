require('dotenv').config()
require('express-async-errors');
const cors = require('cors')
const express = require('express')
const {rateLimit} = require('express-rate-limit')
const app = express()
const connectDB = require('./db/connect')
const orcrRouter = require('./routes/orcr')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

app.use(cors())

const limiter = rateLimit({
	windowMs:  60 * 1000, 
	limit: 5, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
	
})

app.get('/elb-check', (req, res) => res.send('hello world!'));
app.use('/api/v1', limiter, orcrRouter)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async() => {

    console.log('Hello');
    try {
        await connectDB(process.env.URL)
        console.log('Connected to database Successfully!')
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log('Error: ', error);
    }
}

start()
