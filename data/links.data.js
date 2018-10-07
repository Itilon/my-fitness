const { getDataController } = require('./controllers').init();

const init = (Link) => {
    async function getAll() {
        return getDataController.getAll(Link);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};