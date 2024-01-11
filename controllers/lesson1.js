const matthewRoute = (req, res) => {
    res.send('Matthew Felton');
};
const abbyRoute = (req, res) => {
    res.send('Abby Capps');
};

module.exports = {
    matthewRoute,
    abbyRoute
};