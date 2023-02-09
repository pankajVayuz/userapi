
import mongoose from 'mongoose';


// create user api  mongoose schema
 const UserSchema = new  mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
     },
     status: {
         type: Boolean,
         default:true
    }
});




const User = mongoose.model('User',UserSchema);//schema convort to model 

export default User;




