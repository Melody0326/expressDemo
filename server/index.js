/**
 * Created by Melody on 16/9/12.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var data = req.query;
    res.render('index', {title: data.aa})
});

router.get('/getname', function(){
    var data = req.query;
    res.render('index', {title: data.name});
});

module.exports = router;