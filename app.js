const express = require('express');
const cors = require('cors');
const app = express();
const taskRouter = require('./routes/task.router');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/tasklist', taskRouter);

app.get('/', (req,res) => {
    res.send("<h1> hello nodemon </h1>")
})

app.listen(3000, () => console.log('server is runing...'));

