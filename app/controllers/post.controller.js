const init = (data) => {
    const getHome = async (req, res) => {
        try {
            const quotes = await data.quotes.getAll();
            const results = await data.results.getAll();

            res.render('home', {
                quotes: quotes,
                results: results
            });
        } 
        catch(err) {
            console.error(err.message);
        }
    };

    const getAbout = (req, res) => {
        res.render('about');
    };

    const get404 = (req, res) => {
        res.render('404');
    };

    const getWrongPage = (req, res) => {
        res.redirect('404');
    }

    return {
        getHome,
        getAbout,
        get404,
        getWrongPage
    }
};

module.exports = {
    init
};