const init = (data) => {
    const getHome = async (req, res) => {
        try {
            const quotes = await data.quotes.getAll();
            const results = await data.results.getAll();
            const links = await data.links.getAll();

            res.render('home', {
                quotes: quotes,
                results: results,
                links: links
            });
        } 
        catch(err) {
            console.error(err.message);
        }
    };

    const getAbout = (req, res) => {
        const links = [
            {name: 'Кой съм аз', link: "about"}, 
            {name: 'За контакт', link: '#contact'}
        ];

        const isAbout = true;

        res.render('about', {
            links: links,
            isAbout: isAbout
        });
    };

    const get404 = (req, res) => {
        res
            .status(404)
            .render('404');
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