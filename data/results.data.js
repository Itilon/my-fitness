const { getDataController } = require('./controllers').init();

const init = (Result) => {
    async function getAll() {
        return getDataController.getAll(Result);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};