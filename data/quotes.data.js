const init = (Quote, getDataController) => {
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