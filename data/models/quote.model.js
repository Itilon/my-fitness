const init = (db) => {
    const quoteSchema = new db.Schema({
        number: {
            type: Number,
            required: true
        },
        quote: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    });

    const Quote = db.model('Quote', quoteSchema);
    return Quote;
};

module.exports = {
    init
};