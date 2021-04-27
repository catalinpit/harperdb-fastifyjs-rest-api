const harperive = require('harperive').Client;

const DB_CONFIG = {
    harperHost: process.env.INSTANCE_URL,
    username: process.env.INSTANCE_USERNAME,
    password: process.env.INSTANCE_PASSWORD,
    schema: process.env.INSTANCE_SCHEMA
};

const client = new harperive(DB_CONFIG);

module.exports = client;