import UserSrv from "../services/UserSrv";
import { FormEvent } from "react";
import { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import * as crypto from "crypto-js";


function Register (){
    const [mes,setMes] = useState("");          //To show message from API

    const enc = (data:string,key:string)=>{
        const encData = crypto.AES.encrypt(data,key).toString();
        return encData;
    }

    const dec = (encData:string, key:string)=>{
        const decData = crypto.AES.decrypt(encData,key);
        return decData.toString(CryptoJS.enc.Utf8);
    }

    const register = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        console.log(formData);
        UserSrv.register(formData)
        .then(res=>{
            console.log("get data");
            console.log(res);
            console.log(res.data);
            setMes(res.data);
        })
        .catch(err=>{
            console.log("err");
            console.log(err);
        })
    }
    return(
        <>
            <h1>Register Page</h1>
            <h2>message: {mes}</h2>
            <form method="POST" onSubmit={register} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <TextField
                    required
                    type="text"
                    style={{padding:"1vh",width:"45%"}}
                    id="standard-required"
                    name="uname"
                    label="Your User Name"
                    variant="standard"
                />
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
                <TextField
                    required
                    multiline
                    type="textarea"
                    style={{padding:"1vh",width:"45%"}}
                    id="standard-multiline-static"
                    rows={5}
                    name="bio"
                    label="Your Bios"
                    variant="standard"
                />
                <Button type="submit" variant="contained" size="large" color="primary" >Register</Button>
            </form> 
        </>
    )
}
export default Register;