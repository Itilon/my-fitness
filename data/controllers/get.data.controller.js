const init = () => {
    const getAll = async (DataObject) => {
        try {
            const result = await DataObject.find();
            return result;
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