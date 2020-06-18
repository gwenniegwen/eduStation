const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/user')

router.post('/', (req, res) => {

    const { username, email, password } = req.body;

    //user validation//
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please Enter All Required Fields' })

        //Check for an exisiting user//
        User.findOne({ email }
            .then(user => {
                if (user) {
                    return res.status(400).json({ msg: 'This User Already Exists' });
                }
                const newUser = new User({
                    username,
                    email,
                    password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                jwt.sign(
                                    { id: user.id },
                                    config.get('jwtSecret'),
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({
                                            token,
                                            user: {
                                                id: user.id,
                                                username: user.username,
                                                email: user.email
                                            }
                                        });
                                    }
                                )




                            });
                    })
                })

            }))

    }
});