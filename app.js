import Koa from 'koa'
const app = new Koa()

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World!'
})

app.listen(4000, () => console.log('server started 4000'))

export default app

