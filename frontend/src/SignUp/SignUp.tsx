import { Button, TextField, Typography } from "@mui/material";
import "./SignUp.css";

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

        <TextField id="outlined-basic" label="Email" variant="outlined" className = "text-input"/>
        <TextField id="outlined-basic" label="Password" variant="outlined" className = "text-input"/>

        <Button variant="contained" className = "sign-up-button"
        sx = {{
          marginLeft: "auto",
          marginRight: "10px",
          marginTop: "10px"
        }}
        >Sign up</Button>

      </div>
    </div>
  )
}

export default SignUp;