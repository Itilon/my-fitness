const init = (Quote) => {
    async function getAll() {
        try {
            const quotes = await Quote.find();
            return quotes;
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