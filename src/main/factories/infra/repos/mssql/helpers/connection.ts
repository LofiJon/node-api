import { MssqlConnection } from '@/infra/repository/mssql/helpers'

export const makeMsslConnection = (): MssqlConnection => {
    return MssqlConnection.getInstance()
}
