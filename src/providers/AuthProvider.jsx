/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../config/firebase.config"



export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isItLoading, setIsItLoading] = useState(true)

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setIsItLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            // setIsItLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const info = {
        user,
        googleLogIn,logOut,
    }

    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider