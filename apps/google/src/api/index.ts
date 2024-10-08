import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
});

app.get('/hello-alex', (c) => {
  return c.json({ message: 'Hello Alex!' })
});

export default handle(app)
