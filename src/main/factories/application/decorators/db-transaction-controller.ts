import { DbTransactionController } from '@/application/decorators'
import { makeMsslConnection } from '@/main/factories/infra/repos/mssql/helpers'
import { Controller } from '@/application/contracts'

export const makeMsslTransactionController = (
    controller: Controller
): DbTransactionController => {
    return new DbTransactionController(controller, makeMsslConnection())
}

