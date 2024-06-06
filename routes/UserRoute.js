const { getAllUsers, addUser, showUser, updateUser, deleteUser, loginUser, logoutUser } = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.get("/allUsers", getAllUsers);
userRouter.post("/createUser", addUser);
userRouter.get("/showUser/:userId", showUser);
userRouter.put("/updateUser/:userId", updateUser);
userRouter.delete("/deleteUser/:userId", deleteUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

module.exports = userRouter;