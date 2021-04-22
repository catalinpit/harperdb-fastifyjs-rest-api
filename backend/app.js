const app = require('fastify')({
    logger: true
});

require('dotenv').config()

app.get('/', (req, res) => {
    res.send({ hello: 'world' });
});

app.listen(process.env.PORT, (err, addr) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }

    app.log.info(`Your server is listening on port ${process.env.PORT} 🧨`);
})