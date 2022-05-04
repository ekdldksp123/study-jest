export const beforeAuthorize = () => false

export const authorizeFail = () => {
    setTimeout(() => console.log('case fail'), 100)
    return 'fail'
}
export const authorizeSuccess = () => {
    setTimeout(() => console.log('case success'), 100)
    return 'success'
}
export const authorizeRefresh = (): string => {
    setTimeout(() => console.log('case refresh'), 100)
    return 'refresh'
}
export const isAuthorized = (secret: string): boolean => secret === 'success' || secret === 'refresh'
