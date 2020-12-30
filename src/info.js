var client = require('./connection.js');

client.cluster.health({}, function (err, resp, status) {
    console.log('-- Client Health --', resp.body);
});

client.count(
    { index: 'gov', type: 'constituencies' },
    function (err, resp, status) {
        console.log('constituencies', resp.body.count);
    }
);
