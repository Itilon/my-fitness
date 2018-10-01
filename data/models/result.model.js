const init = (db) => {
    const resultSchema = new db.Schema({
        weight: Number,
        date: Date
    });

    const Result = db.model('Result', resultSchema);
    return Result;
};

module.exports = {
    init
};