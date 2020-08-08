const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const database_name = "meetinsky"
const collection_name = "users"
const moderator_list = ["r.rahul@itorizin.in", "s.tanmoy@itorizin.in"]

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is listening ${PORT}`)
})

app.get('/', (req, res)=>{
    res.sendfile('index.html');
});

mongoose.connect(`mongodb://localhost:27017/${database_name}`, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
  
const User = mongoose.model(collection_name, { 
    name: { type: String }, 
    email: { type: String },
    admin: { type: Boolean}
}); 
 
app.post('/login', (req, res)=>{
    User.exists({email: req.body.email}, (err, doc)=>{
        if(err) {
            console.log(err)
        } else {
            if(doc){
                res.send('user is already added')
            } else {
                email = req.body.email;
                name = req.body.name;
                if(moderator_list.indexOf(email) !== -1 ) {
                    var new_user = new User({ name: req.body.name, email: req.body.email, admin: 1});
                    new_user.save((err, new_user)=>{
                        if (err) return console.error(err);
                        res.send('User added as moderator');
                    });

                } else {
                    var new_user = new User({ name: req.body.name, email: req.body.email, admin: 0});
                    new_user.save((err, new_user)=>{
                        if (err) return console.error(err);
                        res.send('User added as guest');
                    });
                }
            }
        }
    })
});

 