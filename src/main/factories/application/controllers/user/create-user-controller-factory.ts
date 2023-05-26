import {Controller} from "@/application/contracts";
import { CreateUserController } from '@/application/controllers'
import {makeDbCreateUser} from "@/main/factories/domain/usecases/user/create-user";
import {makeMsslTransactionController} from "@/main/factories/application/decorators/db-transaction-controller";
export const makeCreateUserController = (): Controller => {
    const controller = new CreateUserController(
        makeDbCreateUser()
    )
    return makeMsslTransactionController(controller)
}