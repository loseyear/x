const Koa = require('koa')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')

const appConfig = require('../config/app')
const logger = require('../library/logger')
const router = require('../route')

const app = new Koa()
const port = process.env.PORT || appConfig.port || 3040

app.use(bodyParser({ extended: true }))
app.use(async (ctx, next) => logger(ctx, next, app))
app.use(router())

if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'test'
) {
  onerror(app)
}

app.on('error', (e, ctx) => ctx.logger.error(e))

if (process.env.NODE_ENV === 'test') {
  module.exports = app.listen()
} else {
  app.listen(port)
}
