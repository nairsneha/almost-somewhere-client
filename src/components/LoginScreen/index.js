import React from "react";
import { BsPencilFill } from 'react-icons/bs';
import {useState} from "react";
import {REACT_APP_API_BASE} from "../../config";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const[user, setUser]=useState({
        username:null,
        password:null
      });

    function isObjectEmpty(obj) {
        for (var key in obj) {
            if (obj[key] === null || obj[key] === "")
                return true;
        }
        return false;
    }

    const loginUser =() =>{

        if(isObjectEmpty(user)){
            alert('Enter all feilds');
        }else{
            fetch(`${REACT_APP_API_BASE}/auth/login`,
                  {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(user)
                  })
                .then(response =>response.json())
                .then(data =>{
                    alert(data.message);
                    if(data.status===200){
                        localStorage.setItem('allmostsomewhere-token', 'Bearer '+data.response.accessToken);
                        localStorage.setItem('allmostsomewhere-username',user.username);
                        localStorage.setItem('allmostsomewhere-isLoggedIn',true);
                        navigate('/');
                    }
                });


        }

    }


    return (
        <>
            <h1>Login <BsPencilFill />
            </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="email" className="form-control" id="email"
                           aria-describedby="emailHelp" placeholder="Enter username"
                           name="username" onChange={(e)=>setUser({
                                                                      ...user,
                                                                      username:e.target.value
                                                                  })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                           placeholder="Password" name="password" onChange={(e)=>setUser({
                                                                                             ...user,
                                                                                             password:e.target.value
                                                                                         })}/>
                </div>

                <button type="button" className="btn btn-primary" onClick={(e)=>loginUser()}>Submit</button>
            </form>
        </>

    );

}

export default Login;