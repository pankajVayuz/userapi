import express from "express";
import {
  user,
  addUser,
    userGetById,
    updateUser,
    deleteUser
} from "../controllers/userListCotroller.js";
const userRouter = express.Router();
/** define router path */
userRouter.get("/", user);
userRouter.get("/:id", userGetById);
userRouter.post("/add", addUser);
userRouter.patch("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);
export default userRouter
