const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = process.env.PORT || 3001;
// const User = require('./models/user');

// mongoose.connect('mongodb://localhost:27018/sampledb');

const app = express();
app.use(bodyParser.json());
const db = require('./models/index'); // cliでinitした時に作成されるmodels配下のindex.js
const func = db.Function;

app.post('/functions', (req, res) => {
  // const user = new User(req.body);
  // user.save((err, addedUser) => {
  //   if (err)
  //     return res.status(400).json({
  //       errorMessage: 'faild to add the user. User name must be unique.'
  //     });
  //   res.send(addedUser);
  // });
  console.log('app.post');
  func.create({name: req.body.name, disp_name: req.body.disp_name}).then(u => { res.send(u);});
});

app.get('/functions', (req, res) => {
  func.findAll().then(fc => { res.send(fc);});
});

app.get('/functions/:id', (req, res) => {
  const id = req.params.id;
  func.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(fc => {
    res.send(fc);});
  });

  app.delete('/functions/:id', (req, res) => {
    const id = req.params.id;
    func.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(fc => {
      fc.destroy();
    });
});

app.delete('/functions', (req, res) => {
  Function.destroy({}, err => {
    if (err)
      return res.status(400).json({
        errorMessage: 'faild to delete all functions.'
      });
    res.send(true);
  });
});

app.listen(port, () => {
  console.log(`Server up on ${port}`);
});