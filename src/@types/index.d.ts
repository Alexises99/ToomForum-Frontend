/* eslint-disable @typescript-eslint/no-unused-vars */

import { Express } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { UserEntry } from '../models/user'
import { type FileArray} from 'express-fileupload'

declare module 'express-serve-static-core' {
    export interface Request {
        token?: string,
        user?: Omit<UserEntry, 'password'>,
        files?: FileArray | undefined
    }
}
