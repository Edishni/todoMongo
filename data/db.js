const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDB', {useUnifiedTopology: true, useNewUrlParser: true} )
.then(
    () => console.log('connect to mongodb..')
)