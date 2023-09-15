import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { promptRoutes } from './routes/prompt'
import { uploadRoutes } from './routes/upload'
import { completionRoutes } from './routes/completion'
import { transcriptionRoutes } from './routes/transcription'

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.register(promptRoutes)
app.register(uploadRoutes)
app.register(completionRoutes)
app.register(transcriptionRoutes)

app
  .listen({ port: 3333 })
  .then(() => console.log('server running...'))