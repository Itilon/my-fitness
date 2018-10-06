const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router;

    const { getController } = controllers;

    router
        .get('/', getController.getHome)
        
        .get('/about', getController.getAbout)

        .get('/404', getController.get404)

        .get('*', getController.getWrongPage);

    app.use('/', router);
};

module.exports = {
    attachTo
};