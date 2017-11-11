/**
 * Created by kennethFlowers on 11/11/17.
 */

var orm = require('../config/orm.js');

var elder = {
    all: function(cb){
        orm.all('elder', function(res){
            cb(res);
        })
    }
};


module.exports = elder;