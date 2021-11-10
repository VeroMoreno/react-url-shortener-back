const Url = require('../models/Url.model');

/*exports.insertUrl = async (url) => {
    return new Promise((resolve, reject) => {
        let urlData = new Url({ urlOriginal: url.urlOriginal });
        urlData.save()
        .then(urlInserted => {
            resolve(urlInserted)
        })
        .catch(error => {
            reject({ codigo:500, mensaje: `Error to insert URL in Database, Sigh! - ${error}`})
        })
    });
}*/

exports.insertUrl = async (url) => {
    return new Promise(async function(resolve, reject) {
        let response;
        const fullUrl = new Url({ urlOriginal: url.urlOriginal });
        try {
            let urlResult = await fullUrl.save();
            response = {
                codigo: 201,
                message: 'URL inserted successfully',
                url: urlResult.urlShort
            }
            resolve(fullUrl);
        } catch (error) {
            response = {
                codigo: 400,
                error: `Sigh! - ${error}`
            }
            reject({ codigo:400, mensaje:`Sigh! - ${error}`})
        }
    })
}

// When user visits short url, redirect to original url
exports.redirectUrl = async (redirectUrl) => {
    return new Promise(async function(resolve, reject) {
        try {
            let urlResult = await Url.findOne({ urlShort: redirectUrl });
            response = {
                codigo: 201,
                message: 'You have your URL successfully',
                url: urlResult.urlOriginal
            }
            resolve(urlResult.urlOriginal);
        } catch (error) {
            reject({ codigo:404, mensaje:`404! - ${error}`})
        }
    })
}