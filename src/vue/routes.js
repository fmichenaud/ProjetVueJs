var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

var upload = multer({ storage: storage });
var app = express();
var routes = express.Router();

var Item = require('./store');

routes.route('/add').post(multer({dest: './uploads'}).single('myFile'), function (req, res) {
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

routes.route('/').get(function (req, res) {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

routes.route('/:id').get(function(req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
    res.json(item);
  });
});

routes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

routes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.title = req.body.title;
      item.year = req.body.year;
      item.language = req.body.language;
      item.realisator_lastname = req.body.realisator_lastname;
      item.realisator_firstname = req.body.realisator_firstname;
      item.realisator_nationality = req.body.realisator_nationality;
      item.realisator_birthday = req.body.realisator_birthday;
      item.kind = req.body.kind;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
routes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = routes;
