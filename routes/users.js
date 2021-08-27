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
    res.render('users/addUser');
});

router.post('/new', async (req, res) => {
    const { id, firstName, role, surrname, email, phone, lastName } = req.body;
    let user;
    try {
        user = new User(firstName, lastName, surrname, email, role, phone);
        await user.save();
    } catch (err) {
        res.send("<b>Error!</b>")
    }

    res.redirect('/');
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, surrname, phone, role, email } = req.body;
    const user = new User(firstName, lastName, surrname, email, role, phone);

    await user.updateById(id);
    res.redirect('/');
});

module.exports = router;