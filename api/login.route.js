const express = require('express');
const loginRoutes = express.Router();

// Require Business model in our routes module
let Login = require('./login.model');

// Defined store route
loginRoutes.route('/add').post(function (req, res) {
  let login = new Login(req.body);
  login.save()
    .then(login => {
      res.status(200).json({'login': 'login in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
loginRoutes.route('/').get(function (req, res) {
    Login.find(function(err, loginusers){
    if(err){
      console.log(err);
    }
    else {
      res.json(loginusers);
    }
  });
});

// Defined edit route
loginRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Login.findById(id, function (err, login){
      res.json(login);
  });
});

//  Defined update route
loginRoutes.route('/update/:id').post(function (req, res) {
    Login.findById(req.params.id, function(err, login) {
    if (!login)
      res.status(404).send("data is not found");
    else {
        login.user_name = req.body.user_name;
        login.user_password = req.body.user_password;
        login.user_type = req.body.user_type;

        login.save().then(login => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
loginRoutes.route('/delete/:id').get(function (req, res) {
    Login.findByIdAndRemove({_id: req.params.id}, function(err, login){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = loginRoutes;