import { Button, TextField, Typography } from "@mui/material";
import "./Login.css";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Database, getDatabase } from "firebase/database";
import firebaseConfig from "../firebaseConfig";
import $ from "jquery"


const app: FirebaseApp = initializeApp(firebaseConfig);
const database: Database = getDatabase(app)
const auth: Auth = getAuth()


const performLogin = () => {
  const email: string = $("#login-email-input").val()
  const password: string = $("#login-password-input").val()

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.replace("/dashboard")
    })
    .catch(alert)

}

const Login = () => {
  return (
    <div className = "login">
      <div className = "login-modal">
        <Typography variant = "h4"
        sx = {{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content"
        }}
        >Login</Typography>

        <TextField id="login-email-input" label="Email" variant="outlined" className = "text-input"/>
        <TextField id="login-password-input" label="Password" variant="outlined" className = "text-input"/>

        <Button variant="contained" className = "login-button"
        sx = {{
          marginLeft: "auto",
          marginRight: "10px",
          marginTop: "10px"
        }}
        onClick = {() => performLogin()}
        >Login</Button>

      </div>
    </div>
  )
}

export default Login;