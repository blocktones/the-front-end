import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import "./NavbarStyles.css"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button class="button-74">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/posts">
            <button class="button-74" >Posts</button>
          </Link>
        
          <button class="button-74"  onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button class="button-74">Create New Account</button> </Link>
          <Link to="/login"> <button class="button-74">Login</button> </Link>
        </>
      )}      
    </nav>
  );
}

export default Navbar;


