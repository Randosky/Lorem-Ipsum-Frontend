import getUniversalCookies from "universal-cookie"

export function getCookie(name: string) {
    const cookies = new getUniversalCookies()
    return cookies.get(name)
}
