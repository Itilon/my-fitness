const init = (db) => {
    const Quote = require('./models/quote.model').init(db);
    const quotes = require('./quotes.data').init(Quote);

    const Result = require('./models/result.model').init(db);
    const results = require('./results.data').init(Result);

    return Promise.resolve({
        quotes: quotes,
        results: results
    });
};

module.exports = {
    init
};