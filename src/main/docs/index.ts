import { API } from '@/utils/constants'
import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
    openapi: '3.0.0',
    info: {
        title: 'Backend Picpe',
        version: '1.0.0',
        contact: {
            name: 'Creathus',
            email: '',
            url: ''
        },
        license: {
            name: 'GPL-3.0-or-later',
            url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
        }
    },
    servers: [
        {
            url: API,
        }
    ],
    paths,
    schemas,
    components
}
