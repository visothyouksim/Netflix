const User = require("../models/UserModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ message: "Voici la liste des utilisateurs", users });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const addUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    try {
        const savedUser = await user.save();
        res.json({ message: "Utilisateur ajoute avec succes", savedUser });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const showUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json({ message: "Voici l'utilisateur", user });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                }
            }
        );
        res.json({ message: "Utilisateur mis a jour avec succes", updatedUser });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.userId });
        res.json({ message: "Utilisateur supprime avec succes", deletedUser });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        res.json({ message: "Utilisateur connecté avec succes", user });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.json({ message: "Utilisateur deconnecté avec succes" });
    } catch (error) {
        res.json({ message: "Une erreur est survenue", error });
    }
};

module.exports = { getAllUsers, addUser, showUser, updateUser, deleteUser, loginUser, logoutUser };