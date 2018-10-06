const init = (db) => {
    const clientSchema = new db.Schema({
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        goal: {
            type: String,
            required: true
        }
    });

    const Client = db.model('Client', clientSchema);
    return Client;
};

module.exports = {
    init
};