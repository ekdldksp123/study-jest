export const beforeAuthorize = () => false

export const authorizeSuccess = () => {
    setTimeout(() => console.log('case success'), 100)
    return 'success'
}

export const expiredAuthToken = () => {
    setTimeout(() => console.log('case expired auth_token'), 100)
    return 'success_expired'
}

export const expiredRefreshToken = () => {
    setTimeout(() => console.log('case expired refresh_token'), 100)
    return 'refresh_expired'
}

export const authorizeRefresh = (): string => {
    setTimeout(() => console.log('case refresh'), 100)
    return 'refresh'
}
export const isAuthorized = (secret: string): boolean => secret === 'success' || secret === 'refresh'
