const init = () => {
    const createOne = async (DataObject, options) => {
        const newObject = new DataObject(options);
    
        try {
            const result = await newObject.save();
            return result;
        } catch(err) {
            console.log(err.message);
        }
    };

    return {
        createOne
    }
};

module.exports = {
    init
};