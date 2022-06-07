import ShoutOutModel from "../Models/shoutOut";
import "./ShoutOut.css";

interface Props {
  shoutOut: ShoutOutModel;
}

const ShoutOut = ({ shoutOut }: Props) => {
  return (
    <ul className="ShoutOut">
      <p>To: {shoutOut.to}</p>
      <p>From: {shoutOut.from}</p>
      <p>"{shoutOut.text}"</p>
    </ul>
  );
};

export default ShoutOut;
