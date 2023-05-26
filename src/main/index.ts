import './config/module-alias'
import { MssqlConnection } from '@/infra/repository/mssql/helpers/connection'
import 'reflect-metadata'
import { API, SWAGGER } from '@/utils/constants'
import { env } from "@/main/config/env";
import {databaseSeed} from "@/main/seeds/database-seed";

MssqlConnection.getInstance()
  .connect()
  .initialize()
  .then(async () => {
      const { app } = await import('@/main/config/app')
      console.log(`Picpe Server running at http://localhost:${env.port}${API}`)
      console.log(`Swagger at http://localhost:${env.port}${API}${SWAGGER}`)
  })
  .catch(console.error)
