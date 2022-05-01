import React from "react";
import { Outlet } from "react-router-dom"
import NavBar from './navBar/index.js'
const AlmostSomewhere = () => {

    return(<>
        {<NavBar />}
            <div>
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