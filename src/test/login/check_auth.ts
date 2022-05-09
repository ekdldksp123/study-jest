import { AuthResult } from '../../libs/types';
import { isAuthorized } from '../mock/auth_result'

export const checkAuth = (token: string): AuthResult => {
    const loginStaus = isAuthorized(token)

    if (loginStaus) return AuthResult.SUCCESS
    else {
        if (token === 'success') return AuthResult.NEED_REFRESH
        if (token === 'refresh') return AuthResult.FAIL
    }
    return AuthResult.ERROR
}





