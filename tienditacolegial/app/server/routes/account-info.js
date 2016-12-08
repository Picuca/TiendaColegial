var db = require('../database');


exports.editInfo = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

        var field = req.query.p3;

        client.query(
          'UPDATE CUSTOMER ' +
          'SET ' + field + ' = $1 '+
          'WHERE cid = $2', [req.query.p1, req.query.p2], function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }

            res.send(result.rows);
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}