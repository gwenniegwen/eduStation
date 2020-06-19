const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResults } = require('express-validator/check')
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

//route with endpoint api/users (register a user)
router.post(
    "/",
    [
        check("username", "username is required").not().isEmpty(),
        check('email", "please include a valid email'),
        check("passord", "Password must be greater than 6").isLength({ min: 6 }),
    ],

    async (req, res) => {
        //express validator//
        const errors = validationResults(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { username, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'This User Already Exists' });
            }
            user = new User({
                username,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 3600
            }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')

        }
    }
);

module.exports = router;
