import setupMiddlewares from '@/main/config/middlewares'
import setupSwagger from '@/main/config/swagger'
import { setupRoutes } from '@/main/config/routes'
import express from 'express'

const app = express()
console.log('oi')
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export { app }