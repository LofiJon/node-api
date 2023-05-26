export interface DeleteUser {
    delete : (userId: DeleteUser.Params) => Promise<DeleteUser.Result>
}

export namespace DeleteUser {
    export type Params = {
        id: number
    }
    export type Result = {
        id: number
        statusCode: number
        message: string
    }
}