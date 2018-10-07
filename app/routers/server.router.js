const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router;

    const { getController, postController } = controllers;

    router
        .get('/', getController.getHome)
        
        .get('/about', getController.getAbout)

        .get('/404', getController.get404)

        .post('/contact', postController.createClient)

        .get('*', getController.getWrongPage);

    app.use('/', router);
};

module.exports = {
    attachTo
};