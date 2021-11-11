<div style="text-align:center"><img src="/readme-cover.png" alt="background"/></div>

# ⛰ Fuji Url Shortener
> A simple url shortener

A URL shortening service converts that long URL to a short, case-sensitive alphanumeric code. Simply put, this means that a URL shortening service takes ridiculously long URLs (web addresses) and makes them short.

## Installing / Getting started

```shell
npm run server
```

You can now access the service at `http://localhost:3003/`.

## Getting started / Heroku + MongoDb Atlas

When is active this run in [Heroku Url](https://react-url-shortener-back.herokuapp.com)
Dont forget connect your cluster [MongoDB Atlas](https://cloud.mongodb.com/atlas/public/).

## Developing

### Technologies / Built With
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B">
  <img src="https://img.shields.io/badge/Mongoose-00C58E?style=for-the-badge">
</p>

### Dependencies / Prerequisites
- nodemon (-D)
- cors: 2.8.5
- dotenv: 8.6.0
- express: 4.17.1
- helmet: 4.6.0
- mongoose: 5.6.4
- nanoid: 2.1.11

## Api Reference

Endpoints:
- POST / - Shorten a URL
- GET /:url - Redirects to the original URL (Comodin endpoint)


## 💻 Deployment

In Heroku + MongoDB Atlass
<a target="_blank" href="https://www.notion.so/Deploy-Mongo-Atlas-Heroku-534adcedca514eccba1805661d98b618">Cheat in Notion but you dont have access!</a>

### Licensing

GNU GENERAL PUBLIC LICENSE

### Now what?

This is a project to test some knowledge so it lacks certain verifications