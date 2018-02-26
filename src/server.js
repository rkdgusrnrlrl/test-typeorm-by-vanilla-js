const compress = require('koa-compress');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');

const app = module.exports = new Koa();
const db = require("./db");

db.connection().then(async conection => {
    app.use(logger());
    app.use(koaBody());
    app.use(compress());


    router.get('/', function (ctx) {
        ctx.body = {ok : true , msg : "hello world"}
    });

    app.use(router.routes());

    if (!module.parent) {
        app.listen(3000);
        console.log('listening on port 3000');
    }
}).catch(console.error)

