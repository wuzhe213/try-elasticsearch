const express = require('express');
const app = express();
const path = require('path');

var client = require('./connection.js');

app.set('port', process.env.port || 4000);

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //自定义中间件，设置跨域需要的响应头。
    next();
};
app.use(allowCrossDomain);

app.get('/', async (req, res, next) => {
    const searchResult = await client.search({
        index: 'gov',
        // type: 'constituencies',
        body: {
            query: {
                match: { ConstituencyName: 'Ipswich' },
            },
        },
    });

    console.log('resposearchResultnse.body.hits', searchResult.body.hits);
    res.send(searchResult.body.hits);
});

app.listen(app.get('port'), (server) => {
    console.info(`Server listen on port ${app.get('port')}`);
});
