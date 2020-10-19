let connection = require("./connection");

let orm = {
    selectAll: function(selectedTable, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, selectedTable, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

      insertOne: function(newBurger, cb) {
        let queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
        connection.query(queryString, newBurger, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

      updateOne: function(uniqueId, cb) {
        let queryString = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
        connection.query(queryString, uniqueId, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }

    };

    module.exports = orm;