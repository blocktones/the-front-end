import { NavLink } from "react-router-dom";

import { useContext } from "react";

function Navbar() {
    
    
    return (

        <nav className={"Navbar "}>
            <h1>NAVBAR</h1>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;