const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = Router();
const { check, validationResult } = require('express-validator');

//api/auth/register
router.post('/register',
    [check('email', 'Email invalid').isEmail(),
    check('password', 'Min password length 6 symbols').isLength({ min: 6 })],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid registration data'
                })
            }

            const { email, password } = req.body;

            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже существует' });
            };
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: 'User create' });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не такб попробуйте снова' });
        }
    });
//api/auth/login
router.post('/login', async (req, res) => {

});

module.exports = router;