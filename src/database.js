const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zhamatdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db está conectada'))
    .catch(err => console.log(err));