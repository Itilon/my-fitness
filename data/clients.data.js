const { getDataController, createDataController } = require('./controllers').init();

const init = (Client) => {
    async function createClient(options) {
        return createDataController.createOne(Client, options);
    }

    return {
        createClient
    }
};

module.exports = {
    init
};