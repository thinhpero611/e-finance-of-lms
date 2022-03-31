import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from ".."
import firebase from "firebase/compat"
import "firebase/compat/auth"

// @ts-ignore
const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

interface IProps {
  children: React.PropsWithChildren<any>
}

interface user {
  email?: string
  password?: string
}

export const AuthProvider = ( props: IProps ) => {

  const [currentUser, setCurrentUser] = useState<firebase.User | undefined>()
  const [loading, setLoading] = useState(true)

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email: string) => {
    return currentUser?.updateEmail(email)
  }

  const updatePassword = (password: string) => {
    return currentUser?.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        setLoading(false)
      }
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  )
}