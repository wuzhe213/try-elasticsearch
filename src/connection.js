const { Client } = require('@elastic/elasticsearch');

const client = new Client({
    node: 'http://localhost:9200',
});

module.exports = client;

// (async () => {
//     const result = await client.search({
//         index: 'products',
//         body: {
//             query: { fuzzy: { name: 'pencile' } },
//         },
//     });

//     console.log('results', result.body.hits.hits);
// })();
