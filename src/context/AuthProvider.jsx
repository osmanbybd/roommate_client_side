import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const  [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)


const userRegister = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () =>{
    return signOut(auth)
}


const updateuser = (updateData) =>{
    return updateProfile(auth.currentUser, updateData)
}

const googleLogin = (provider) =>{
    return signInWithPopup(auth ,provider)
}
 
useEffect(() =>{

    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    })

    return () => {
        unSubscribe()
    }
},[])

const userInfo = {
userRegister,
userLogin,
user,
updateuser,
setUser,
logOut,
googleLogin,
loading,
setLoading
}

    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;