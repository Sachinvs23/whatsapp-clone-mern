import React from "react";
import "./Login.css";
import { Button } from "@mui/material"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../ContextApi/StateProvider";
import { actionTypes } from "../ContextApi/reducer";


const Login = () => {

  const[state, dispatch] = useStateValue();
  console.log(state);

  const signIn = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    })
    .catch((error)=>{
      alert(error.message);
    });
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
          alt="logo"
        />
         <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
            Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
