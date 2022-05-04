import { isAuthorized } from '../mock/auth_response'

export const checkAuth = (token: string): void => {
    const loginStaus = isAuthorized(token)
}





