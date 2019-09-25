const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./Data');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
             quoteText: req.body.quoteText,
             quoteAuthor: req.body.quoteAuthor,
            
        }, 
        function (err, data) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(data);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, datas) {
        if (err) return res.status(500).send("There was a problem finding the data.");
        res.status(200).send(datas);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the data.");
        if (!data) return res.status(404).send("No user found.");
        res.status(200).send(data);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) return res.status(500).send("There was a problem deleting the data.");
        res.status(200).send("Data: "+ data.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, data) {
        if (err) return res.status(500).send("There was a problem updating the data.");
        res.status(200).send(data);
    });
});


module.exports = router;