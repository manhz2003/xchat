const getHomePages = (req, res) => {
    res.send('trang chủ');
}

const getCheck = (req, res) => {
    res.render('Example.ejs');
}

module.exports = {
    getHomePages,
    getCheck
}