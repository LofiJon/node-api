import {makeDbCreateUser} from '@/main/factories/domain/usecases/user/create-user'

export class UserSeeder {
    async handler(): Promise<void> {
        const createUser = makeDbCreateUser()
        await createUser.execute({
            name: 'usuário um',
            lastName: 'sobrenome um'
        })
    }
}