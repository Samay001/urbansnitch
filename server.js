import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';

// rest objecct
const app = express();

//config env
dotenv.config();

//database config
connectDB();

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(morgan('dev')); 

//routing
app.use('/api/v1/auth', authRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.white); 
});
