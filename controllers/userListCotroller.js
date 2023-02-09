import User from "../models/userModel.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
/**get all useer lis  in database api */
const user = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
        console.log("user api called.........")
    } catch (err) {
        res.send("Error",+ err)
        
    }
};

/**get singal user data by id */
const userGetById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
      
        res.json(user)
    } catch (err) {
        res.send("Error",+ err)
        
    }
}
/**add user api define */

 const addUser = async (req, res) => {

    const user= new  User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
        status:req.body.status,
    })
    try {
        const u1 = await user.save()
        res.json(u1)
    } catch (err) {
        res.send("Error"+err)
        
    }
}

/**update user api */

const updateUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)

        user.username = req.body.username
        user.email = req.body.email 
        user.password = req.body.password
        user.status=req.body.status
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send("error"+err)
    }
}
/**delete user api define */
const deleteUser = async (req,res) => {
    try {
        console.log("id.......",req.params);
        const user = await User.findByIdAndDelete(req.params.id);
        res.send("success..");
    } catch (err) {
        res.send("Error"+err)
    }
}

export {user,addUser,userGetById,updateUser,deleteUser} // export all function 