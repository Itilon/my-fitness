const init = (db) => {
    const quotes = require('./quotes.data')
            .init(require('./models/quote.model').init(db));

    const results = require('./results.data')
            .init(require('./models/result.model').init(db));

    const links = require('./links.data')
            .init(require('./models/link.model').init(db));

    const clients = require('./clients.data')
            .init(require('./models/client.model').init(db));

    return Promise.resolve({
        quotes: quotes,
        results: results,
        links: links,
        clients: clients
    });
};

module.exports = {
    init
};