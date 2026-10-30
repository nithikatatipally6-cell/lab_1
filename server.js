const express = require('express');

const app = express();

// Log each request after its response has been sent.
app.use((request, response, next) => {
    response.on('finish', () => {
        console.log(`${request.path} ${response.statusCode}`);
    });
    next();
});

app.get('/', (request, response) => {
    response.status(200).send('Welcome to the Lab 1 Express server!');
});

app.get('/about', (request, response) => {
    response.status(200).json({
        name: 'Nithika Tatipally',
        section: 'GEN AI'
    });
});

app.get('/time', (request, response) => {
    response.status(200).send(`Current date and time: ${new Date()}`);
});

app.use((request, response) => {
    response.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
