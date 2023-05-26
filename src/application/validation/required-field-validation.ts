import { Validation } from '@/application/contracts'
import { MissingParamError } from '@/application/errors'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | undefined {
    if (
      !input[this.fieldName] &&
      typeof input[this.fieldName] !== 'boolean' &&
      typeof input[this.fieldName] !== 'number'
    ) {
      return new MissingParamError(this.fieldName)
    }
  }
}
