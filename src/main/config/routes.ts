import { API } from '@/utils/constants'
import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
    const router = Router();

    const routeFolders = ['user']; // Adicionar no array o nome de acordo com o que for escrito na pasta de routes.

    routeFolders.forEach(folder => {
        const routeFiles = readdirSync(join(__dirname, `../routes/${folder}`))
            .filter(file => !file.endsWith('.map'))
            .map(file => import(`../routes/${folder}/${file}`));

        Promise.all(routeFiles)
            .then(routes => {
                routes.forEach(route => {
                    route.default(router);
                });
            })
            .catch(error => {
                console.error(`Falha ao importar pasta de rotas: ${folder}:`, error);
            });
    });

    app.use(API, router);
};
