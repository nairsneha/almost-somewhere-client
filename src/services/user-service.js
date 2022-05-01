import {REACT_APP_API_BASE} from "../config";

const loginUserSvc=(user)=>{

  return  fetch(`${REACT_APP_API_BASE}/auth/login`,
          {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user)
          })
        .then(response =>response.json())
        .then(data =>{
            if(data.status===200){
                localStorage.setItem('allmostsomewhere-token', 'Bearer '+data.response.accessToken);
                localStorage.setItem('allmostsomewhere-username',user.username);
                localStorage.setItem('allmostsomewhere-isLoggedIn',true);
              return(  fetch(`${REACT_APP_API_BASE}/user/${user.username}/bio`,
                      {
                          method: 'GET',
                          headers: { 'Content-Type': 'application/json',
                              'authorization': 'Bearer '+data.response.accessToken},

                      })
                    .then(response1 => response1.json())

              );
            }else{
                alert('Incorrect credentials. Please try again.');
            }
        });

}

const signUpUserSvc=(user)=>{
  return  fetch(`${REACT_APP_API_BASE}/auth/signup`,
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
                        }
                    });
            }else{
                alert(data.message);
            }
        });
}

const api={loginUserSvc,signUpUserSvc}
export default api;