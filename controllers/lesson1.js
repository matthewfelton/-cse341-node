const matthewRoute = (req, res) => {
    res.send('Matthew Felton');
};
const hannahRoute = (req, res) => {
    res.send('Hannah Birch');
};

module.exports = {
    matthewRoute,
    hannahRoute
};