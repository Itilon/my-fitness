const init = (data) => {
    const createClient = async (req, res) => {
        const options = {
            firstName: req.body.firstname,
            middleName: req.body.middlename,
            lastName: req.body.lastname,
            email: req.body.email,
            goal: req.body.goal
        };

        try {
            const client = await data.clients.createClient(options);
            console.log(client);
            res.redirect('/');
        }
        catch(err) {
            console.error(err.message);
        }
    };

    return {
        createClient
    }
};

module.exports = {
    init
};