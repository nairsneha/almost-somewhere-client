import React from "react";
import { BsPencilFill } from 'react-icons/bs';
import {useState} from "react";
import {REACT_APP_API_BASE} from "../../config";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
const Login=()=>{
    const navigate = useNavigate();

    const dispatch = useDispatch();
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
            fetch(`http://localhost:8081/auth/login`,
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
                        console.log(data);
                        console.log(user.username);
                        fetch(`http://localhost:8081/user/${user.username}/bio`,
                              {
                                  method: 'GET',
                                  headers: { 'Content-Type': 'application/json',
                                      'authorization': 'Bearer '+data.response.accessToken},

                              })
                            .then(response1 => response1.json())
                            .then((data1)=>{
                              alert(data1);
                               dispatch({
                                             type: 'create-user',
                                             user: data1.response
                                         });
                                console.log(data1);
                                navigate('/');
                            });
                    }
                });


        }

    }


    return (
        <>
            <h1>Login
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