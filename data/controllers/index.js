const init = () => {
    const getDataController = require('./get.data.controller').init();
    const createDataController = require('./create.data.controller').init();

    const controllers = {
        getDataController,
        createDataController
    };

    return controllers;
};

module.exports = {
    init
};