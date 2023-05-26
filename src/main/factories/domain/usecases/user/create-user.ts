import { CreateUser } from "@/domain/contracts/repository";
import { MssqlUserRepository } from '@/infra/repository/mssql/user-repository'
import { DbCreateUser } from "@/domain/usecases/user/db-create-user";

export const makeDbCreateUser = (): CreateUser => {
    const mssqlUserRepository = new MssqlUserRepository()
    return new DbCreateUser(mssqlUserRepository)
}