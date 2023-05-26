import { CreateUser } from '@/domain/contracts/repository/user/create-user'
import { Controller, HttpResponse, Validation } from '@/application/contracts'
import { serverError, badRequest, created } from '@/application/helpers'

export class CreateUserController implements Controller {
    constructor(
      private readonly createUser: CreateUser
    ) {}
  
    async handle(
      request: UserRequest.content
    ): Promise<HttpResponse> {
      try {

        const { name, lastName } = request
        const result = await this.createUser.execute({
          name,
          lastName
        })
        return created(result)
      } catch (error: any) {
        return serverError(error)
      }
    }
  }

  
export namespace UserRequest {
    export type content = {
      name: string
      lastName: string
    }
  }
  