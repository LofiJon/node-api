export const createUserSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        }
    },
    required: ['name', 'lastName']
}
