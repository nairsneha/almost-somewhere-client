import React from "react";
import { Outlet } from "react-router-dom"
import {useSelector} from "react-redux";
const AlmostSomewhere = () => {

    const profile = useSelector(
        state => state.userStore);

    return(<>
        {/*<NavBar />*/}
            <div>
                <div>
                    {JSON.stringify(profile)}
                    access Token: {localStorage.getItem('allmostsomewhere-token')} <br />
                    username: {localStorage.getItem('allmostsomewhere-username')} <br />
                    isLoggedIn: {localStorage.getItem('allmostsomewhere-isLoggedIn')} <br />
                </div>
                <div>
                    <Outlet/>
                </div>
                <div>
                    <h1>Footer</h1>
                </div>
            </div>
        </>
    )
}

export default AlmostSomewhere;