const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db', {useUnifiedTopology: true})
    .then(() => {
        console.log("connected to mongoDB")

    })
    .catch((err) => {
        console.log(err)

    });
;

require('./user');