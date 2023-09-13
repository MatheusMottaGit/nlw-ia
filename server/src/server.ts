import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { promptRoutes } from './routes/prompt'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.register(promptRoutes)
app.register(uploadRoutes)

app
  .listen({ port: 3333, host: '0.0.0.0' })
  .then(() => console.log('server running...'))