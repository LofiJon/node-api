export const env = {
    port: process.env.PORT ?? 3012,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    postgres_port: process.env.POSTGRES_PORT ?? 5432,
    username: process.env.POSTGRES_USERNAME ?? 'postgres',
    password: process.env.POSTGRES_PASSWORD ?? 'postgres',
    database: process.env.POSTGRES_DATABASE ?? 'picpe',
}


