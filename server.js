require('dotenv').config();
const express = require('express');
const { port, db_url } = require('./config');
const path = require('path');
const users_router = require('./routes/users');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

// application settings
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static(__dirname + '/public'));
app.use('/users', users_router);

app.get('/', async (req, res) => {
    let users
    try {
        [users, _] = await User.findAll();
    } catch (err) {
        console.log(err);
    }

    res.render('users/index', { users: users });
});

app.use((req, res) => { res.status(404).render('404'); });

app.listen(port, () => { console.log(`Server is running on port: ${port}`); });
