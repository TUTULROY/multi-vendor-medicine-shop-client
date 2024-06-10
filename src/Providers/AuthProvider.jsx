import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hook/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new  GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
;    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[axiosPublic])

    const authInfo ={
        user,
        createUser,
        updateUserProfile,
        loading,
        signIn,
        logOut,
        googleSignIn,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;