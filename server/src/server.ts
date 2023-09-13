import { fastify } from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/prompts', async () => {
  const prompts = await prisma.prompt.findMany()

  return { prompts }
})

app
  .listen({ port: 3333, host: '0.0.0.0' })
  .then(() => console.log('server running...'))