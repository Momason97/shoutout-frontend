import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOut, { User } from "../Models/shoutOut";
import {
  deleteShoutout,
  getAllShoutoutsToUser,
  postNewShoutOut,
  upVoteShoutOut,
} from "../services/shoutOutService";
import ShoutOutListItem from "./ShoutOut";
import ShoutOutForm from "./ShoutOutForm";
import "./ToUserRoute.css";

const ToUserRoute = () => {
  const { user } = useContext(AuthContext);
  const to: string = useParams().to!;
  const [userShoutOuts, setUserShoutOuts] = useState<ShoutOut[]>();

  useEffect(() => {
    getAllShoutoutsToUser(to).then((res) => {
      setUserShoutOuts(res);
    });
  }, [to]);
  const addShoutOut = (so: ShoutOut): void => {
    postNewShoutOut(so).then((res) => {
      getAllShoutoutsToUser(to).then((res) => {
        setUserShoutOuts(res);
      });
    });
  };

  const deleteHandler = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAllShoutoutsToUser(to).then((res) => {
        setUserShoutOuts(res);
      });
    });
  };
  const upvoteHandler = (user: User, id: string): void => {
    upVoteShoutOut(user, id).then(() => {
      getAllShoutoutsToUser(to).then((res) => {
        setUserShoutOuts(res);
      });
    });
  };
  return (
    <div className="ToUserRoute">
      <h2>All Shoutouts to: {to}</h2>
      <ul>
        {userShoutOuts?.map((item) => (
          <ShoutOutListItem
            key={item._id}
            shoutOut={item}
            deleteHandler={deleteHandler}
            upvoteHandler={upvoteHandler}
          />
        ))}
      </ul>
      {user ? (
        <ShoutOutForm addShoutOut={addShoutOut} toUser={to} />
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default ToUserRoute;
