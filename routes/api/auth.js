const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/user')

router.post('/', (req, res) => {

    const { email, password } = req.body;

    //user validation//
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please Enter All Required Fields' })

        //Check for an exisiting user//
        User.findOne({ email }
            .then(user => {
                if (!user) {
                    return res.status(400).json({ msg: 'This User Does Not Exist' });
                }

                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({msg: 'invalid login'});
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

                    })

            })

        });

module.export = router;