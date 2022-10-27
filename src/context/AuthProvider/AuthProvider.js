import React from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useEffect } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()

const auth = getAuth(app)

function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider()
  const gtiHubProvider = new GithubAuthProvider()

  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)


  const userRegistration = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setloading(false)
    })

    return () => unsubscribe()
  }, [])

  const userUpdateProfile = (name, photo) => {
    setloading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const userLogin = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const singInGoogle = () => {
    setloading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const singInGithub = () => {
    setloading(true)
    return signInWithPopup(auth, gtiHubProvider)
  }

  const userLogOut = () => {
    setloading(true)
    signOut(auth)
      .then(() => { })
      .catch(() => { })
  }

  const authInfo = { userRegistration, userUpdateProfile, userLogin, userLogOut, singInGoogle, singInGithub, user, loading }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider