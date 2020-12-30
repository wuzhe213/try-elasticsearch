const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var client = require('./connection.js');

app.set('port', process.env.port || 4000);

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);

app.use(bodyParser.json());

const parseSearchResult = (searchResult) => {
    if (searchResult.body.hits.total.value > 0) {
        const hits = searchResult.body.hits.hits;

        return {
            total: searchResult.body.hits.total.value,
            data: searchResult.body.hits.hits.map((hit) => {
                return hit._source;
            }),
        };
    } else {
        return {
            total: 0,
            data: [],
        };
    }
};

app.post('/search', async (req, res, next) => {
    console.log('search', req.body);
    if (req.body.search !== undefined) {
        const searchResult = await client.search({
            index: 'kuaixuefeng',
            body: {
                query: {
                    match: { knowledge: req.body.search },
                },
            },
        });
        res.send(parseSearchResult(searchResult));
    } else {
        res.send({ total: 0, data: [] });
    }
});

app.listen(app.get('port'), (server) => {
    console.info(`Server listen on port ${app.get('port')}`);
});
