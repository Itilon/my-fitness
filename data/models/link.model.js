const init = (db) => {
    const linkSchema = new db.Schema({
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    });

    const Link = db.model('Link', linkSchema);
    return Link;
};

module.exports = {
    init
};