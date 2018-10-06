const dataController = require('./controllers/get.data.controller').init();

const init = (Link) => {
    async function getAll() {
        return dataController.getAll(Link);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};