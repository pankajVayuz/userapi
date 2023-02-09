import express from 'express';
import mongoose from 'mongoose';
import userList from './routes/userRoutes.js';
import cors from "cors"

const port = 9000;
/**conect express to database using mongoose */
const url = "mongodb+srv://pankaj24golu:lucky450@cluster0.k4m7kkp.mongodb.net/users"
const app = express();
app.use(cors())
mongoose.set('strictQuery', false);
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  
const con = mongoose.connection
con.on('open', () => console.log("Db connected...."))
app.use(express.json())
app.use('/admin/v1/users',userList)

// create app listing pore server crea
app.listen( process.env.PORT||port, () => {
    console.log(`server is listing on http//localhost/9000`);
})                  