var client = require('./connection.js');

client.search(
    {
        index: 'gov',
        // type: 'constituencies',
        body: {
            query: {
                match: { ConstituencyName: 'Ipswich' },
            },
        },
    },
    function (error, response, status) {
        if (error) {
            console.log('search error: ' + error);
        } else {
            console.log('--- Response ---');
            console.log(response);
            console.log('total', response.body.hits.total);

            console.log('--- Hits ---');
            response.body.hits.hits.forEach(function (hit) {
                console.log(hit);
            });
        }
    }
);
