import { authorizeFail, authorizeSuccess, authorizeRefresh } from './../mock/auth_response';
import { checkAuth } from './check_auth';

export const accessSuccess = async () => {
    const token = await authorizeSuccess()

}