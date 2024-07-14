import { Button, TextField, Typography } from "@mui/material";
import ProfileSettings from "../Profile Settings/ProfileSettings";
import firebaseConfig from "../firebaseConfig";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Database, getDatabase, set } from "firebase/database";
import { usersCreate } from "../api";
import $ from "jquery"

import "./SignUp.css"


const app: FirebaseApp = initializeApp(firebaseConfig);
const database: Database = getDatabase(app)
const auth: Auth = getAuth()


const performSignup = () => {
  const email: string = $("#signup-email-input").val()
  const password: string = $("#signup-password-input").val()
  
  alert(`Signing up with email ${email} and password ${password}`)

  usersCreate(email, password)
    .then(() => {
      signInWithEmailAndPassword(auth, email, password)
      window.location.replace("/")
    })
    .catch(alert)

}


const SignUp = () => {
  
  return (
    <div className = "sign-up">
      <div className = "sign-up-modal">
        <Typography variant = "h4"
        sx = {{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content"
        }}
        >Sign up</Typography>

        <TextField label="Email" variant="outlined" className = "text-input" id="signup-email-input"/>
        <TextField label="Password" variant="outlined" className = "text-input" id="signup-password-input"/>

        <Button variant="contained" className = "sign-up-button"
        sx = {{
          marginLeft: "auto",
          marginRight: "10px",
          marginTop: "10px"
        }}
        onClick = {() => performSignup()}
        >Sign up</Button>

      </div>
    </div>
  )
}

export default SignUp;