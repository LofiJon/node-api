import {
  ConnectionNotFoundError,
  TransactionNotFoundError
} from '@/infra/repository/mssql/helpers'
import { DbTransaction } from '@/application/contracts'
import { QueryRunner, DataSource } from 'typeorm'
import {env} from "@/main/config/env";

export class MssqlConnection implements DbTransaction {
  private static instance?: MssqlConnection
  private query?: QueryRunner
  private dataSource: DataSource | undefined

  private constructor() {}

  static getInstance(): MssqlConnection {
    if (MssqlConnection.instance === undefined)
    MssqlConnection.instance = new MssqlConnection()
    return MssqlConnection.instance
  }

  connect(): DataSource {
    if (this.dataSource === undefined) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: +env.postgres_port,
        username: env.username,
        password: env.password,
        database: env.database,
        entities: ['src/**/*.entity.ts'],
      })
    }
    return this.dataSource
  }

  async disconnect(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = undefined
  }

  async openTransaction(): Promise<void> {
    console.log('oi')
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = this.dataSource.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
  }

  async commit(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }
}
