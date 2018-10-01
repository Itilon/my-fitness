const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router;

    const { postController } = controllers;

    router
        .get('/', postController.getHome)
        
        .get('/about', postController.getAbout)

        .get('/404', postController.get404)

        .get('*', postController.getWrongPage);

    app.use('/', router);
}

module.exports = {
    attachTo
}