import Router from 'koa-router'

const router = new Router({ prefix: '/api/v1' })

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!'
})

export default router
