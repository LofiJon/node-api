import { USER, PAGEABLE } from '@/utils/constants'
import {createUserPath} from "@/main/docs/paths/create-user-path";

export default {
    [`/${USER}`]: createUserPath,
}
