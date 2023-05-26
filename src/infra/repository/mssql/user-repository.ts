import {
    CreateUser
} from '@/domain/contracts/repository'
import { ILike } from 'typeorm'
import { User } from '@/domain/entities'
import { MssqlConnection } from '@/infra/repository/mssql/helpers'

export class MssqlUserRepository implements CreateUser {

    async execute(user: CreateUser.Params) : Promise<CreateUser.Result> {
        const userNew = new User();
        userNew.name = user.name 
        userNew.lastName = user.lastName

        const saved = await MssqlConnection.getInstance()
            .connect()
            .manager.save(user)

        return {
            message: 'Usuário salvo com sucesso!',
            statusCode: 201,
        }
    }

}