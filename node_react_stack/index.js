const express = require('express')
const app = express();
const port = 5000

const { User } = require('./models/User');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => {
    console.log("mongo db connected")
}).catch(err  => console.log(err));

app.get('/', (req, res) => {
    res.send("hello world");
})

app.post('/register', (req, res) => {

    const user = new User(req.body)
    console.log(req.body);
    
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log("app started"))