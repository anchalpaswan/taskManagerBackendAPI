import express from 'express';
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'

export const app = express();

config({
    path: './data/config.env'
})

// Using middlewares
app.use(express.json());
app.use(cookieParser());

// Using Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);