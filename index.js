import express from 'express';
import dotenv from 'dotenv';
import morgan from "morgan"
import connectDB from './config/db.js'
import todoRouter from './routes/toDoRoutes.js'
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = new express();
connectDB()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/todo",todoRouter)

app.listen(PORT, console.log(`server rUnning in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));