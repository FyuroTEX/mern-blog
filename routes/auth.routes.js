const { Router } = require('express');
const router = Router();

//api/auth/register
riuter.post('/register', async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не такб попробуйте снова'})
    }
});
//api/auth/login
riuter.post('/login', async (req, res) => {
    
});

module.exports = router;