import { USER, PAGEABLE } from '@/utils/constants'
import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { ID, STATUS } from '@/utils/constants-params'
import { makeCreateUserController } from '@/main/factories/application/controllers'

export default (router: Router): void => {
    router.post(`/${USER}`, adapt(makeCreateUserController()))
}