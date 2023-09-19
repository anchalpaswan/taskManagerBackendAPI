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
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Using Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);

// middleware for error
app.use(errorMiddleware)