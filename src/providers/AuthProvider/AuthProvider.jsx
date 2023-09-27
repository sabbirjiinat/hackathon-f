import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState('')
  const [location,setLocation] = useState('')
  const [title,setTitle] = useState('')

  const googleProvider = new GoogleAuthProvider();

  //   Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, image_url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image_url,
    });
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);

// get and set token
// if(currenUser){
//   axios.post("https://bistro-boss-server-chi-one.vercel.app/jwt", {email: currenUser.email})
//   .then(data => {
//     localStorage.setItem("access-token", data.data.token)
//   })
// }
// else{
//   localStorage.removeItem("access-token")
// }

      setLoading(false);
      console.log(currenUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    googleLogin,
    category,setCategory,location,setLocation,title,setTitle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
