const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const [user, _] = await User.findById(id);

    res.render('users/editUser', { user: user[0] });
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await User.deleteById(id);
    res.redirect('/');
});

router.get('/new', (req, res) => {
    res.render('users/addUser', { user: {} });
});

module.exports = router;