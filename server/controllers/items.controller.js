var mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports = {
     getAll(req, res) {
        Item.find({})
            .then( Item => {
                res.json(Item);
            })
            .catch(errors => {
                res.status(500).json(errors)
            });
    },

    create(req, res) {
        let newItem = new Item(req.body);
        newItem.save()
            .then( () => {
                console.log('successfully created a item', req.body);
            })
            .catch(errors => res.status(500).json(errors))
    },

    checkBox(req, res){
          let itemUp=req.body;
          console.log(itemUp);

          Item.findOne({_id:req.body._id}, (err, item) => {
               // console.log(item)
               if (err){
                    res.status(500).send(err);
               }else{
                    item.user = itemUp.user;
                    item.title = itemUp.title;
                    item.description = itemUp.description;
                    item.completed = itemUp.completed;
                    item.save((err, item)=>{
                         if (err) {
                              res.status(500).send(err)
                         }
                              res.status(200).send(item);
                    })
               }
          })

     }

}
