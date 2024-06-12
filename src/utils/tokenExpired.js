import { jwtDecode } from "jwt-decode";

export const tokenExpired = (token) => {
  const tokenDecoded = jwtDecode(token)
  const expired = tokenDecoded.exp * 1000
  const time = new Date().getTime()
  //console.log('TokenDecoded: ', tokenDecoded)

  if (time > expired) {
    return true
  }
  return false
}
