import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <h1>
        <Link to="/">GC Shoutouts</Link>
      </h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {user ? (
        <>
          <p>Welcome {user?.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
          <img src={user.photoURL!} alt={"option"} />
          <p>
            <Link to="/me">See my s/o's!</Link>
          </p>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
