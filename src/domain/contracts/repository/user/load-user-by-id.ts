import { User } from '@/domain/entities'

export interface LoadUserById {
    loadById: (id: LoadUserById.Params) => Promise<LoadUserById.Result>
}
export namespace LoadUserById {
    export type Params = {
        id: number
    }
    export type Result = undefined | User
}
