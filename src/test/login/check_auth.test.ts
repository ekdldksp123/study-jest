import { AuthResult } from '../../libs/types'
import { authorizeSuccess, authorizeRefresh, expiredAuthToken, expiredRefreshToken } from '../mock/auth_result'
import { checkAuth } from './check_auth'
import Router from "next/router"

const checkResult = (token: string) => {
    if (checkAuth(token) === AuthResult.SUCCESS) Router.push({ pathname: '/main' })
    else Router.push({ pathname: '/login' })
}

export const accessSuccess = async () => {
    const token = await authorizeSuccess()
    checkResult(token)
}

export const accessSuccessFail = async () => {
    // auth token 이 만료된 경우 api server 에 refresh token 요청을 해서 받아온다
    let token = await expiredAuthToken()

    if (checkAuth(token) === AuthResult.SUCCESS) Router.push({ pathname: '/main' })
    else {
        token = await authorizeRefresh()
        checkResult(token)
    }
}

export const accessRefreshFail = async () => {
    // refresh token 이 만료된 경우 다시 로그인 페이지로 리다이렉팅 시킨다
    const token = await expiredRefreshToken()
    checkResult(token)
}