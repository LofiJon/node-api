import {
    CreateUser
} from '@/domain/contracts/repository/user/create-user'

export class DbCreateUser implements CreateUser {

    constructor(
        private readonly createUser: CreateUser
    ) {}

    async execute(userData: CreateUser.Params): Promise<CreateUser.Result> {
        const result = await this.createUser.execute({ ... userData })
        return {
            message: result.message,
            statusCode: result.statusCode
        }
    }

}