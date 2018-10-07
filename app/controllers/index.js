const init = (data) => {
    const getController = require('./get.controller').init(data);
    const postController = require('./post.controller').init(data);

    const controllers = {
        getController,
        postController
    };

    return controllers;
};

module.exports = {
    init
};