import { createAction } from 'redux-actions'

export const LOGIN = 'APP/LOGIN'
export const login = createAction(LOGIN, (username, password) =>
  new Promise((resolve, reject) => {
    if (username && password) {
      resolve(password)
    } else {
      reject()
    }
  }).then((data) => {
    sessionStorage.setItem('isLoggedIn', true)
    sessionStorage.setItem('username', username)
    return data
  })
)
