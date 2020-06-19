const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResults } = require('express-validator/check');
const auth = require('../../middleware/auth')

const User = require('../../models/user')

//route with endpoint api/auth (get a logged in user)
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

//route with endpoint api/auth (auth user & get token)
router.post('/', [
    check('email', 'please include a valid email'),
    check('password', 'please include a valid password')

],

    async (req, res) => {

        //express validator//
        const errors = validationResults(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, pasword } = req.body
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'This User Does Not Exist' });
            }

            const isMatch = await brcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'invalid login' });
            }

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
            console.err(err.message);
            res.status(500).send('Server Error')
        }
    }
)

module.exports = router;