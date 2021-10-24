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
app.set('js', path.join(__dirname, '/public/js'));
app.use(express.static(__dirname + '/public'));
app.use('/users', users_router);

app.get('/', async (req, res) => {
    const { search } = req.query;
    let users;
    try {
        if(search === undefined || search == '') 
            [users, _] = await User.findAll();
        else 
            [users, _] = await User.search(search);
    } catch (err) {
        res.send(`<b>Error: </b>database connection failed :(`);
    }

    res.render('users/shared/__layout', { users: users, number: 0, page: 'index' });
});

app.use((req, res) => { res.status(404).render('404'); });

app.listen(port, () => { console.log(`Server is running on port: ${port}`); });
