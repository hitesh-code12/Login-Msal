import React, { useState } from 'react'
import "./Login.css"
import {Button} from "react-bootstrap"
import user from "./user.png"
function Login() {
    const [username, setusername] = useState("")
    const [userpassword, setuserpassword] = useState("")

    const onchangehandler=(event,ip)=>{

        if(ip==="name"){
            setusername(event.target.value)
}
if(ip==="pass"){
    setuserpassword(event.target.value)

}


    }
    const submitHandler=()=>{
        console.log(username,userpassword,"credentials")

    }

  return (
    <div className="Containers">
        <div>
        <img className='imgas' src={user} alt=""/>
        </div>
        <div className='login'>
            Login to Page
        </div>
        <form >
            <label>
                Username:
            </label>
            <input onChange={(e)=>onchangehandler(e,"name")} type={"text"}>
            </input><br></br>
            <label>
                PassWord:
            </label>
            <input type={"password"} onChange={(e)=>onchangehandler(e,"pass")}>
            </input>
            <br></br>

            <Button style={{marginTop:"20px"}} value="submit" onClick={submitHandler}>Submit</Button>
            {/* <input type={"button"} value="submit" onClick={submitHandler}>
            </input> */}
        </form>
  
    </div>
  )
}

export default Login