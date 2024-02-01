const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Contact API',
        description: 'Contact API',
    },
    host: 'https://cse341-mfelton.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });