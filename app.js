import express from 'express';
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors';


export const app = express();

config({
    path: './data/config.env'
})

// Using middlewares
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://65437f688fec0a632c11d290--inquisitive-moonbeam-851216.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});



// Using Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);

// middleware for error
app.use(errorMiddleware)