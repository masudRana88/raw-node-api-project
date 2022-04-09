/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Masud Rana
 * Date: 07/04/2022
 */

// dependencis
const http = require('http');
const dotenv = require('dotenv').config();
const { hendleReqRes } = require('./helper/hendleReqRes');

// app object - Module scaffolding
const app = {};

// consfiguration
app.config = {
    port: process.env.NODE_PORT,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.hendleReqRes);
    server.listen(app.config.port, () => {
        console.log(`server is running on ${app.config.port}`);
    });
};

// hendle request and response
app.hendleReqRes = hendleReqRes;
// start server
app.createServer();
