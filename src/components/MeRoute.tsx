import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOut, { User } from "../Models/shoutOut";
import {
  getAllShoutoutsToFromMe,
  upVoteShoutOut,
} from "../services/shoutOutService";
import "./MeRoute.css";
import ShoutOutListItem from "./ShoutOut";

const MeRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [myShoutOuts, setMyShoutouts] = useState<ShoutOut[]>();

  useEffect(() => {
    if (user) {
      getAllShoutoutsToFromMe(user?.displayName || "idk").then((res) => {
        setMyShoutouts(res);
      });
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const upvoteHandler = (user: User, id: string): void => {
    upVoteShoutOut(user, id).then(() => {
      getAllShoutoutsToFromMe(user?.displayName || "Anonymous").then((res) =>
        setMyShoutouts(res)
      );
    });
  };
  return (
    <div className="MeRoute">
      <h2>My ShoutOuts</h2>
      <ul>
        {myShoutOuts?.map((item) => (
          <ShoutOutListItem
            key={item._id}
            shoutOut={item}
            deleteHandler={() => {}}
            upvoteHandler={upvoteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeRoute;
