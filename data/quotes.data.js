const { getDataController } = require('./controllers').init();

const init = (Quote) => {
    async function getAll() {
        return getDataController.getAll(Quote);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};