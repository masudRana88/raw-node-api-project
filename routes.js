/*
 * Title: 'Routs'
 * Description: 'This is a router for hendle request and response function'
 * Author: 'Masud Rana'
 * Date: '08/04/2022'
 */

// Routs - Module Scaffolding

const { aboutHendler } = require('./hendeler/reqResHendeler/aboutHendeler');

const routs = {
    about: aboutHendler,
};

module.exports = routs;
