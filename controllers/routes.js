/**
 * Created by kennethFlowers on 11/11/17.
 */

var express = require('express');
var router = express.Router();
var elder = require('../models/elder.js');

router.get('/', function(req,res){
    elder.all(function(elder_data){
        console.log(elder_data);
        res.render('layouts/index',(elder_data));
    });

});


module.exports = router;