import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db, admin } from "../firebase";
import { ref } from "firebase/storage";
// import { addDoc, collection, getDoc, onSnapshot } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { CheckCircleOutlineSharp } from "@material-ui/icons";
import { async } from "@firebase/util";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  const handleGoogleAuth = async () => {
    // Access the Firebase Authentication users
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async(result)=> {
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        await setDoc(doc(db, "userChats", user.uid), {});
        navigate("/");
      })
      .catch((error) => {
        // An error occurred during Google authentication
        console.error('Authentication error:', error);
      });
  }

  // const updateUser = 

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        {/* <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button> */}
          {/* <hr style={{ color: 'black' }}/> */}
          {/* <span>or</span> */}
          {err && <span>Something went wrong</span>}
        {/* </form> */}
        <button onClick={handleGoogleAuth}>Signin With Google</button>
        {/* <p>You don't have an account? <Link to="/register">Register</Link></p> */}
      </div>
    </div>
  );
};

export default Login;