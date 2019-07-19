const express = require('express');
const directorInfoRoutes = express.Router();

// Require Business model in our routes module
let DirectorInfo = require('./directorInfo.model');

// Defined store route
directorInfoRoutes.route('/add').post(function (req, res) {
  let login = new DirectorInfo(req.body);
  login.save()
    .then(login => {
      res.status(200).json({'login': 'login in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
directorInfoRoutes.route('/').get(function (req, res) {
    DirectorInfo.find(function(err, directorinfodata){
    if(err){
      console.log(err);
    }
    else {
      res.json(directorinfodata);
    }
  });
});

// Defined edit route
directorInfoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  DirectorInfo.findById(id, function (err, directordata){
      res.json(directordata);
  });
});

//  Defined update route
directorInfoRoutes.route('/update/:id').post(function (req, res) {
    DirectorInfo.findById(req.params.id, function(err, directordata) {
    if (!directordata)
      res.status(404).send("data is not found");
    else {
        directordata.user_id = req.body.user_id;
        directordata.name = req.body.name;
        directordata.email = req.body.email;
        directordata.contact = req.body.contact;
        directordata.privacy_type = req.body.privacy_type;
        directordata.rating = req.body.rating;

        directordata.save().then(login => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
directorInfoRoutes.route('/delete/:id').get(function (req, res) {
    DirectorInfo.findByIdAndRemove({_id: req.params.id}, function(err, directordata){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = directorInfoRoutes;