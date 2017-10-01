const Item = require('../controllers/items.controller.js');
const User = require('../controllers/users.controller.js');

const path = require('path');

module.exports = function (app) {
    app.get('/items', Item.getAll);
    app.get('/users', User.getAll);
    app.post('/create', Item.create);
    app.get('/user/:id', User.getOne);
    app.put('/checkBox', Item.checkBox);
    app.post('/createUser', User.createUser);
    app.get('/checkUser', User.findUser);
    app.get('/appendGoal/:id', User.appendGoal);


    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./dist/index.html"))
    });
}
