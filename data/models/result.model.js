const init = (db) => {
    const resultSchema = new db.Schema({
        weight: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    });

    const Result = db.model('Result', resultSchema);
    return Result;
};

module.exports = {
    init
};