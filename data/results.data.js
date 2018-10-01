const init = (Result) => {
    async function getAll() {
        try {
            const results = await Result.find();
            return results;
        }
        catch(err) {
            console.error(err.message);
        }
    }

    return {
        getAll
    }
};

module.exports = {
    init
};