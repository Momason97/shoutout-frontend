import { useEffect, useState } from "react";
import ShoutOut from "../Models/shoutOut";
import { getAllShoutouts, postNewShoutOut } from "../services/shoutOutService";
import "./Main.css";
import ShoutOutComponent from "./ShoutOut";
import ShoutOutForm from "./ShoutOutForm";

const Main = () => {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([
    { to: "Andrea", from: "Duy", text: "Hello" },
    { to: "Camille", from: "Brit", text: "Waddup Thoe" },
    { to: "Aaron", from: "Mom", text: "WYA" },
  ]);
  //   useEffect(() => {
  //     getAllShoutouts().then((res) => {
  //       setShoutOuts(res);
  //     });
  //   }, []);
  const addShoutOut = (so: ShoutOut):void=>{
    postNewShoutOut(so).then(res=>{
        getAllShoutouts().then(response=>setShoutOuts(response))
    })
  }
  return (
    <div className="Main">
      {shoutOuts?.map((item) => (
        <ShoutOutComponent key={item._id} shoutOut={item} />
      ))}
      <ShoutOutForm addShoutOut={addShoutOut}/>
    </div>
  );
};

export default Main;
