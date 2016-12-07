var db = require('../database');


exports.editInfo = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(
          'SELECT $1::int AS SOLUTION', ['1'], function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }

            console.log(result.rows[0]);


            res.send(result.rows);
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}
