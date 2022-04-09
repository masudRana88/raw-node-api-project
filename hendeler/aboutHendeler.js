/*
 * Title: 'about hendler'
 * Description: 'this hendler for hendle about route'
 * Author: 'Masud Rana'
 * Date: '07/04/2022'
 */
const hendeler = {};

hendeler.aboutHendler = (req, callback) => {
    const paylode = {
        messege: 'this is about page',
    };

    callback(500, paylode);
};

module.exports = hendeler;
