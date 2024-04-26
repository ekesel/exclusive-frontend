'use server'
 
import { cookies } from 'next/headers'
 
export async function createTokenCookie(data) {
  cookies().set('token', data, { secure: true })

}
export async function getToken() {
  const cookieStore = cookies()
  let token = null
  token = cookieStore.get('token')
  return token
}

export async function deleteCookie(data) {
  cookies().delete(data)
}