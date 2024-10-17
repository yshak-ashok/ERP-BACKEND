const User = require('../Models/userModel');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (err) {
        console.error(err);
    }
};

exports.createUser = async (req, res) => {
    const { firstName, lastName, role, email, mobile, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            firstName,
            lastName,
            role,
            email,
            mobile,
            password: hashedPassword,
        });
        res.status(201).send('User Created');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
};
