import usersService from "../services/users"
import newsService from "../services/new"
import loginService from "../services/login"
import { useNavigate, useLocation } from "react-router-dom"
import { UserEntry, UserEntryWithIsland } from "../interfaces/users/users"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

interface AuthContextType {
  user?: UserEntry
  login: (user: UserEntry) => void
  signUp: (user: UserEntryWithIsland) => void
  checkUser: () => void
  error?: any
  logout: () => void
  setError: (err: any) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [user, setUser] = useState<UserEntry>()
  const [error, setError] = useState<any>()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (error) setError(null)
  }, [location.pathname])

  function login(user: UserEntry) {
    loginService
      .login(user)
      .then((user) => {
        setUser(user)
        setLocalStorage(user)
        navigate("/")
      })
      .catch((err) => setError(err))
  }

  function signUp(user: UserEntryWithIsland) {
    usersService
      .create(user)
      .then(() => {
        loginService.login(user).then((userLogged) => {
          setUser(userLogged)
          setLocalStorage(userLogged)
          console.log(userLogged)
          navigate("/")
        })
      })
      .catch((err) => setError(err))
  }

  function setLocalStorage(user: UserEntry) {
    if (user) {
      global.window.localStorage.setItem(
        "loggedToomForum",
        JSON.stringify(user)
      )
    }
  }

  function getLocalStorage(): string | null {
    return global.window.localStorage.getItem("loggedToomForum")
  }

  function logout() {
    global.window.localStorage.removeItem("loggedToomForum")
    setUser(undefined)
  }

  function checkUser() {
    const user = getLocalStorage()
    if (user) {
      const userRecover: UserEntry = JSON.parse(user)
      setUser(userRecover)
    }
  }

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      signUp,
      checkUser,
      logout,
      setError,
      error,
    }),
    [user, error]
  )

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
