const dataController = require('./controllers/get.data.controller').init();

const init = (Result) => {
    async function getAll() {
        return dataController.getAll(Result);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};