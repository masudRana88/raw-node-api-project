/*
 * Title: '404 not found hendler'
 * Description: 'this hendler for hendle 404 not found route'
 * Author: 'Masud Rana'
 * Date: '07/04/2022'
 */
const hendeler = {};

hendeler.notFoundHendeler = (req, callback) => {
    console.log('thsi is form 404 notfounds');
    const paylode = {
        messege: '404 Page is not found',
    };
    callback(404, paylode);
};

module.exports = hendeler;
