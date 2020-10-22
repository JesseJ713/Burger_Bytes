let orm = require("../config/orm");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", newBurger, function(res) {
            cb(res);
        });
    },

    updateOne: function(uniqueId, cb) {
        orm.updateOne("burgers", uniqueId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;