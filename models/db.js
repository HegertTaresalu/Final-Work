const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db', {useUnifiedTopology: true});
require('./user');