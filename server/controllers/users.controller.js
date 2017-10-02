var mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
     getAll(req, res){
          User.find({})
          .sort({name:'asc'})
          .then(User=>{
               res.json(User)
          })
          .catch(error=>{
               res.status(500).json(errors)
          });
     },

     getOne(req, res) {
         User.findOne({ _id: req.params.id})
             .then(user => {
                 res.json(user);
             })
             .catch(errors => {
                 res.status(500).json(errors);
             });
     },

    findUser(req, res) {
        User.findOne( { name: req.params.name })
            .then(user => {
                res.json(user);
            })
            .catch(errors => {
                createUser(req, res);
            });
    },

    createUser(req, res) {
        let newUser = new User(req.body);
        console.log("creating user ", req.body);
        newUser.save()
            .then( () => {
                console.log('successfully created a user');
            })
            .catch(errors => {
                 console.log("already registered");
            });
    },

    appendGoal(req, res) {
         User.find({_id:req.params.id},function(err,user){
              user.goals.push(req.body);
              user.save();
         })
    },


}
