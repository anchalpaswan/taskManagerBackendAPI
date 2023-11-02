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
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));


// Using Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);

// middleware for error
app.use(errorMiddleware)