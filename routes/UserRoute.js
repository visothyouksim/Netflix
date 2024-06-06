const { getAllUsers, addUser, showUser, updateUser, deleteUser, loginUser, logoutUser } = require("../controllers/userController");
const userRouter = require("express").Router();
const auth = require("../middlewares/auth");

userRouter.get("/allUsers", auth, getAllUsers);
userRouter.post("/createUser", addUser);
userRouter.get("/showUser/:userId", auth, showUser);
userRouter.put("/updateUser/:userId", auth, updateUser);
userRouter.delete("/deleteUser/:userId", auth, deleteUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", auth, logoutUser);


module.exports = userRouter;