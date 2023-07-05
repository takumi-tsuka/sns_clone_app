import { FormEvent } from "react";
import UserSrv from "../services/UserSrv";
import { TextField, Button} from "@mui/material";

function Login(){
    const login =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        UserSrv.login(formData)
        .then(res=>{
            console.log("got response");
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={login} method="POST" style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <TextField
                    required
                    type="email"
                    style={{padding:"1vh",width:"45%" }}
                    id="standard-required"
                    name="email"
                    label="Your Email"
                    variant="standard"
                />
                <TextField
                    required
                    type="password"
                    style={{padding:"1vh",width:"45%"}}
                    id="standard-password-input"
                    name="pass"
                    label="Your Password"
                    variant="standard"
                />
                <Button type="submit" variant="contained" size="large" color="primary" >Login</Button>
            </form>
        </>
    )
}

export default Login;