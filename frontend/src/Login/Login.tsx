import { Button, TextField, Typography } from "@mui/material";
import "./Login.css";

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

        <TextField id="outlined-basic" label="Email" variant="outlined" className = "text-input"/>
        <TextField id="outlined-basic" label="Password" variant="outlined" className = "text-input"/>

        <Button variant="contained" className = "login-button"
        sx = {{
          marginLeft: "auto",
          marginRight: "10px",
          marginTop: "10px"
        }}
        >Login</Button>

      </div>
    </div>
  )
}

export default Login;