import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!'
})

// response
app
.use(router.routes())
.use(router.allowedMethods())

app.listen(4000, () => console.log('server started 4000'))

export default app

