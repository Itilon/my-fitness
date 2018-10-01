const init = (db) => {
    const quoteSchema = new db.Schema({
        number: Number,
        quote: String,
        author: String
    });

    const Quote = db.model('Quote', quoteSchema);
    return Quote;
};

module.exports = {
    init
};