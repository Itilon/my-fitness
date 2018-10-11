const init = (db) => {
    const clientSchema = new db.Schema({
        firstName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15
        },
        middleName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15
        },
        lastName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15
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