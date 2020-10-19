let orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(newBurger, cb) {
        orm.create("burgers", newBurger, function(res) {
            cb(res);
        });
    },

    update: function(uniqueId, cb) {
        orm.update("burgers", uniqueId, function(res) {
            cb(res);
        });
    }
};