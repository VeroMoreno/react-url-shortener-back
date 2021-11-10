const UrlService = require('../services/url.services');

exports.insertUrl = (req, res) => {
  let url = req.body;
  UrlService.insertUrl(url)
    .then(inUrl => {
      res.statusCode = 201;
      res.json(inUrl);
    })
    .catch(error => {
      console.log("error-Controller insertUrl", error)
      res.statusCode = error.codigo
      res.json(error)
    });
}

// When user visits short url, redirect to original url
exports.redirectUrl = (req, res) => {
  let url = req.params.url;
  UrlService.redirectUrl(url)
    .then((redUrl) => {
      res.statusCode = 201;
      res.redirect(redUrl); // Redirect to original url
    }).catch((error) => {
      console.log("error-Controller redirectUrl", error)
      res.statusCode = error.codigo
      res.json(error)
    });
}