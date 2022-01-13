const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LeDb', {useUnifiedTopology: true});

require("./user")