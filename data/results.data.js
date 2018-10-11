const init = (Result, getDataController) => {
    async function getAll() {
        return getDataController.getAll(Result);
    }

    return {
        getAll
    }
};

module.exports = {
    init
};