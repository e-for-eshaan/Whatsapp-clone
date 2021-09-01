import LeftPane from "./components/leftpane/LeftPane";
import classes from "./App.module.css";
import Chats from "./components/chatbox/Chats";
function App() {
  const clicker = (e) => {
    console.log(e);
    return e;
  };
  return (
    <div className={classes.big}>
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <LeftPane clicker={clicker}/>
        </div>
        <div className={classes.chats}>
          <Chats namegen={clicker}/>
        </div>
      </div>
    </div>
  );
}

export default App;
