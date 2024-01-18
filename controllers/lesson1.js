const matthewRoute = (req, res) => {
    res.send('Matthew Felton');
};
const abbyRoute = (req, res) => {
    res.send('Abby Capps');
};

// export module for rest of code to use
module.exports = {
    matthewRoute,
    abbyRoute
};