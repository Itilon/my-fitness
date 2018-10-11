const init = (Client, createDataController) => {
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