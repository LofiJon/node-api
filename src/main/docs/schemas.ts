import {
    createUserSchema
} from './schemas/'
import {errorSchema} from "@/main/docs/schemas/error-schema";

export default {
    error: errorSchema,
    createUser: createUserSchema
}
