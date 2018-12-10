const getUserInfo = (ctx) => {
  try {
    const { query } = ctx
    ctx.logger.info(query)
    ctx.logger.info('a')
    ctx.logger.warn(query)
    ctx.logger.warn('a')
    ctx.logger.error('a')
    ctx.body = {
      code: 0,
      data: query,
    }
  } catch (err) {
    ctx.logger.error(err)
    ctx.body = {
      code: 1,
      msg: 'error',
      data: {},
    }
  }
}

module.exports = {
  'GET /user': getUserInfo,
  'PUT /user': getUserInfo,
  'POST /user': getUserInfo,
  'DELETE /user': getUserInfo,
}
