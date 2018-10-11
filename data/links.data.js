const init = (Link, getDataController) => {
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