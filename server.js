const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = process.env.PORT || 3001;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const User = require('./models/user');

// mongoose.connect('mongodb://localhost:27018/sampledb');

const app = express();
app.use(bodyParser.json());
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require('./models/index'); // cliでinitした時に作成されるmodels配下のindex.js
const func = db.functions;
const price = db.price;

//////////////////////////////
// functions(機能)テーブルAPI
//////////////////////////////
app.post('/functions', (req, res) => {
  console.log('app.post');
  func.create({name: req.body.name, disp_name: req.body.disp_name}).then(u => { res.send(u);});
});

app.get('/functions', (req, res) => {
  console.log(req.query);
  func.findAll({
    where: {
      selectables : {
        [Op.like]: '%' + req.query.clothType + '%'
      }
    }    
  }).then(fc => { res.send(fc);});
});

app.get('/functions/:id', (req, res) => {
  const id = req.query.id;
  func.findOne({
    where: {
      id: id
    }
  })
  .then(fc => {
    res.send(fc);
  });
});

//   app.delete('/functions/:id', (req, res) => {
//     const id = req.params.id;
//     func.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(fc => {
//       fc.destroy();
//     });
// });

// app.delete('/functions', (req, res) => {
//   Function.destroy({}, err => {
//     if (err)
//       return res.status(400).json({
//         errorMessage: 'faild to delete all functions.'
//       });
//     res.send(true);
//   });
// });

//////////////////////////////
// price(価格)テーブルAPI
//////////////////////////////
app.get('/prices', (req, res) => {
  console.log(req.query);
  price.findAll().then(p => { res.send(p);});
});

app.listen(port, () => {
  console.log(`Server up on ${port}`);
});