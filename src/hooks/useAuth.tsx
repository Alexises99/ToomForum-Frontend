import usersService from '../services/users'
import loginService from '../services/login'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserEntry, UserEntryAuth, UserEntryImage } from '../types/users/users'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

interface AuthContextType {
  user?: UserEntryAuth,
  login: (user: UserEntry) => void
  signUp: (user: UserEntryImage) => void
  checkUser: () => void,
  error?: any,
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export function AuthProvider ({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const [ user, setUser ] = useState<UserEntryAuth>()
  const [ error, setError ] = useState<any>()
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (error) setError(null)
  }, [location.pathname])

  function login (user: UserEntry) {
    loginService.login(user)
      .then((user) => {
        setUser(user)
        setLocalStorage(user)
        navigate('/')
      })
      .catch(err => setError(err))
  }

  function signUp (user: UserEntryImage) {
    usersService.create(user)
      .then((user) => {
        setUser(user)
        console.log(user)
        setLocalStorage(user)
        navigate('/')
      })
      .catch(err => setError(err))
  }

  function setLocalStorage (user: UserEntryAuth) {
    if (user) {
      global.window.localStorage.setItem('loggedToomForum', JSON.stringify(user))
    }
  }

  function getLocalStorage (): string | null {
    return global.window.localStorage.getItem('loggedToomForum')
  }

  function logout () {
    global.window.localStorage.removeItem('loggedToomForum')
    setUser(undefined)
  }

  function checkUser () {
    const user = getLocalStorage()
    if (user) {
      const userRecover: UserEntryAuth = JSON.parse(user)
      setUser(userRecover)
      usersService.setToken(userRecover.token)
    }
  }

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      signUp,
      checkUser,
      logout,
      error
    }),
    [user, error]
  )

  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}