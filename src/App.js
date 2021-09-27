import LeftPane from "./components/leftpane/LeftPane";
import classes from "./App.module.css";
import Chats from "./components/chatbox/Chats";
import { useState } from "react";

function App() {
  let x=''
const [state, setstate] = useState('Eshaan')

  const clicker = (e) => {
    if (typeof e == "function") {
      e();
      console.log("function");
    } else console.log(e);
    setstate(e)
    return e;
  };
  const stateSetter = (e) => {
    e();
  };
  return (
    <div className={classes.big}>
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <LeftPane clicker={clicker} />
        </div>
        <div className={classes.chats}>
          <Chats namegen={state} rending={stateSetter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
