import Koa from 'koa'
import api from './api/v1'

const app = new Koa()

// response
app.use(api.routes())
app.use(api.allowedMethods())

const port  = 4000
app.listen(port, () => console.log(`server started ${port}`))

export default app
