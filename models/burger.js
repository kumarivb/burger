// import orm
var orm = require("../config/orm.js");

// call orm functions, res=response
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
          cb(res);
        });
    }
};

// export
module.exports = burger;