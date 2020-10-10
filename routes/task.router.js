require('../data/db');
const express = require('express');
const router = express.Router();
const taskModel = require('../model/task');

router.get('/', (req, res) => { //http://localhost:3000/tasklist
    taskModel.find({}, (err, tasklist) => {
        err ? res.status(500).send('ERROR') : res.status(200).send(tasklist);
    })
});

router.get("/:id", (req, res) => {
const id = req.params.id;
    taskModel.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found task" + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error with id=" + id });
        });
}); 

router.post('/', (req, res, next) => {
    const task = new taskModel({
        id: req.body.id,
        title: req.body.title,
        todo: req.body.todo,
        date: req.body.date,
        time: req.body.time,
        completed: req.body.completed,
    });
    task.save().then(() => res.status(200).send(task)).catch(err => res.status(500).send(err));

})

router.put('/', (req, res, next) => {
    taskModel.findOneAndUpdate({
        id: req.body.id
    }, {
        $set: req.body
    }, (err, doc) => {
        err ? res.status(500).send(err) : res.send(doc).status(202)
    })

})

/* router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    taskModel.findByIdAndDelete({
      
    }, err => {
        err ? res.status(500).send(err) : res.status(202).json({
            id: req.body.id,
            msg: "deleted"
        })
    })
}) */


router.delete('/:id', (req, res,next) => {
    const id = req.params.id;
  
    taskModel.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete ${id}`
          });
        } else {
          res.send({
            message: "deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete " + id
        });
      });
});
  

module.exports = router;