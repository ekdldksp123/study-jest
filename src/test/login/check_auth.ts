import { isAuthorized } from '../mock/auth_result'

export const checkAuth = (token: string): void => {
    const loginStaus = isAuthorized(token)

    // if(loginStaus) 
}





