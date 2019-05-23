let express = require('express');
let router = express.Router();
let model = require('../models/modelBdd')


/* GET home page. */
router.get('/', function (req, res) {
    model.index(function (groupes, contenus) {
        res.render('index', {title: 'Express', groupes: groupes, contenus: contenus});
    })
});

router.post('/', function (req, res) {
    model.add(req.body.objectif, req.body.comment, function (statu) {
        console.log(statu)
        res.redirect('/')
    })
});

router.get('/remove/:id', function (req, res) {
    model.remove(req.params.id, function (statu) {
        console.log(statu)
        res.redirect('/')
    })
});

router.get('/add/:groupe/:id', function (req, res) {
    model.modify(req.params.id,req.params.groupe, function () {
        res.redirect('/')
    })
});

module.exports = router;
