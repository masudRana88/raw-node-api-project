/*
 * Title: hendle request and response
 * Description: hendle all request and response in this app
 * Author: Masud Rana
 * Date: 07/04/2022
 */

// dependencis
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routs = require('../routes');
const { notFoundHendeler } = require('../hendeler/notFoundHendler');

// hendler object - Module scaffolding
const hendler = {};

// hendle request and response
hendler.hendleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    const { query } = parseUrl;
    const { headers } = req;
    const method = req.method.toLowerCase();

    const decoder = new StringDecoder('utf-8');
    let body = '';
    // make a req boject
    const reqObject = {
        trimmedPath,
        query,
        headers,
        method,
        body,
    };
    // get a routs
    const chosenRouts = routs[trimmedPath] ? routs[trimmedPath] : notFoundHendeler;

    req.on('data', (chank) => {
        body += decoder.write(chank);
    });

    req.on('end', () => {
        body += decoder.end();
        chosenRouts(reqObject, (statusCode, paylode) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            paylode = typeof paylode === 'object' ? paylode : {};
            const paylodeString = JSON.stringify(paylode);
            // return final response
            res.writeHead(statusCode);
            res.write(paylodeString);
            res.end();
        });
    });
};

module.exports = hendler;
