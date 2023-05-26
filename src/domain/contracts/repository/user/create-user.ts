export interface CreateUser {
    execute : (
        user: CreateUser.Params
    ) => Promise<CreateUser.Result>
}

export namespace CreateUser {
    export type Params = {
      name: string
      lastName: string
    }
  
    export type Result = {
      message: string
      statusCode: number
    }
}