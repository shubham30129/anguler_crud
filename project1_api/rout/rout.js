let user=require('../component/user/userController');
const bodyparser=require("body-parser");


exports.route=(app)=> {
    //////////////// user ////////////////
    app.post('/api/user',user.addUser);
    app.get('/api/user',user.showUser);
    app.delete('/api/user/:id',user.deleteUser);
    app.get('/api/user/:id',user.editUser);
    app.put('/api/user',user.updateUser);
};