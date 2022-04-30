import React, {useState} from "react";
import { BsPencilFill } from 'react-icons/bs';
import { REACT_APP_API_BASE } from "../../config";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const navigate = useNavigate();
    const[user, setUser]=useState({userType:"Admin",
                                      firstname:null,
                                      lastname:null,
                                      age:null,
                                      username:null,
                                      password:null,
                                      gender:"Male",
                                      confirmPassword:null,
                                      favorites:null
                               });

    const isObjectEmpty=(obj)=> {
        for (var key in obj) {
            if (obj[key] === null || obj[key] === "")
                return true;
        }
        return false;
    }

  const  selectMultipleValuesFromFavourites=(event)=> {

      let values=[];
          Array.from(
            event.target.selectedOptions,
            (option) => values.push(option.value)
        );
      setUser({
          ...user,
                  favorites: values
              });
    }

    const signUpUser =() =>{

        if(isObjectEmpty(user)){
            alert('Enter all feilds');
        }else if(user.password!==user.confirmPassword){
            alert('Confirm password and password value should be same');
        }else{
            fetch(`${REACT_APP_API_BASE}auth/signup`,
                  {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(user)
                  })
                .then(response =>response.json())
                .then(data =>{
                    if(data.status===200){
                        fetch(`${REACT_APP_API_BASE}/bio`,
                              {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify(user)
                              })
                            .then(response =>response.json())
                            .then(data =>{
                                if(data.status===200){
                                    alert('Your have registered successfully')
                                    navigate('/login');
                                }
                            });
                    }else{
                        alert(data.message);
                    }
                });

     /*      */
///bio
            //make api call to register the user
            //alert('user is registered')
            //redirect to login
       //


        }

    }
    return (
        <>
            <h1>Sign Up <BsPencilFill />
            </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" className="form-control" id="first-name"
                           aria-describedby="emailHelp" placeholder="Enter first name"
                           name="first-name" onChange={(e)=>setUser({
                        ...user,
                        firstname:e.target.value
                                                                    })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" className="form-control" id="last-name"
                           aria-describedby="emailHelp" placeholder="Enter last name"
                           name="last-name"
                           onChange={(e)=>setUser({
                                                      ...user,
                                                      lastname:e.target.value
                                                  })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age"
                           aria-describedby="emailHelp" placeholder="Enter age"
                           name="age"
                           onChange={(e)=>setUser({
                                                      ...user,
                                                      age:e.target.value
                                                  })}/>
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" className="form-control" id="username"
                           aria-describedby="emailHelp" placeholder="Enter username"
                           name="username"
                           onChange={(e)=>setUser({
                                                      ...user,
                                                      username:e.target.value
                                                  })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                           placeholder="Password" name="password"
                           onChange={(e)=>setUser({
                                                      ...user,
                                                      password:e.target.value
                                                  })}/>
                </div>

                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" className="form-control" id="confirm-password"
                           placeholder="Password" name="confirm-password"
                           onChange={(e)=>setUser({
                                                      ...user,
                                                      confirmPassword:e.target.value
                                                  })}/>
                </div>

                <div className="form-group">
                    <label htmlFor="user-type">Select User Type</label>
                    <select className="form-control" id="user-type" name="user-type"

                            onChange={(e)=>setUser({
                                                       ...user,
                                                       userType:e.target.value
                                                   })}>
                        <option value="Admin">Admin</option>
                        <option value="Customer">Customer</option>
                        <option value="Customer">Moderator</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="user-type">Gender</label>
                    <select className="form-control" id="gender" name="gender"

                            onChange={(e)=>setUser({
                                                       ...user,
                                                       gender:e.target.value
                                                   })}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="favourites">Favourites</label>
                    <select multiple className="form-control" id="favourites" name='favourites'
                            onChange={(e)=>selectMultipleValuesFromFavourites(e)}>

                        <option value='library'>library</option>
                        <option value='atm'>atm</option>
                        <option value='lodging'>lodging</option>
                        <option value='bank'>bank</option>
                        <option value='movie_theater'>movie theater</option>
                        <option value='police'>police</option>
                        <option value='restaurant'>restaurant</option>
                        <option value='store'>store</option>
                        <option value='subway_station'>subway station</option>
                        <option value='hospital'>hospital</option>
                        <option value='laundry'>laundry</option>
                        <option value='university'>university</option>
                        <option value='supermarket'>supermarket</option>
                        <option value='gym'>gym</option>

                    </select>
                </div>


                <button type="button" className="btn btn-primary" onClick={()=>signUpUser()}>Submit</button>
            </form>
        </>

    );

}

export default SignUp;

/*
"firstname": userBio.firstname,
        "lastname":userBio.lastname,
        "gender": userBio.gender,
        "age": userBio.age,


 */
