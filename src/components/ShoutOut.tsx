import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOutModel, { User } from "../Models/shoutOut";
import { upVoteShoutOut } from "../services/shoutOutService";
import "./ShoutOut.css";

interface Props {
  shoutOut: ShoutOutModel;
  deleteHandler: (id: string) => void;
  upvoteHandler: (user: User, id: string) => void;
}

const ShoutOut = ({ shoutOut, deleteHandler, upvoteHandler }: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <li className="ShoutOut">
      <button onClick={() => deleteHandler(shoutOut?._id!)}>X</button>
      <p>
        To: <Link to={`/user/${shoutOut.to}`}>{shoutOut.to}</Link>
      </p>
      <div className="from-container">
        <p>From: {shoutOut.from}</p>
        {shoutOut.photoURL && (
          <img src={shoutOut.photoURL} alt={shoutOut.from} />
        )}
      </div>
      <p>"{shoutOut.text}"</p>
      {shoutOut.image && (
        <img
          src={shoutOut.image}
          alt={shoutOut.text}
          className="shout-out-img"
        />
      )}
      {user ? (
        <div className="votes-container">
          <button>downvote</button>
          <p>{shoutOut.likes?.length}</p>
          <button
            onClick={() =>
              upvoteHandler(
                { displayName: user.displayName || "anonymous", uid: user.uid },
                shoutOut._id!
              )
            }
          >
            upvote
          </button>
        </div>
      ) : (
        <div>
          <p>TODO</p>
          <p>Please log in to upvote / downvote</p>
        </div>
      )}
    </li>
  );
};

export default ShoutOut;
