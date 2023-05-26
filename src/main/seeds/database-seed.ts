import { UserSeeder } from "@/main/seeds/user-seed";

export const databaseSeed = async (): Promise<void> => {
    const userSeed = new UserSeeder()
    await userSeed.handler()
}