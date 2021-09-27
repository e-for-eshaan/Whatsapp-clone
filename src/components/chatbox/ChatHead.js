import classes from "./ChatHead.module.css";

import dp1 from "./../images/dp1.jpg";
import dp2 from "./../images/dp2.jpg";
import dp3 from "./../images/dp3.jpg";
import dp4 from "./../images/dp4.jpg";
import dp5 from "./../images/dp5.jpg";
import dp6 from "./../images/dp6.jpg";
import dp7 from "./../images/dp7.jpg";

const ChatHead = (props) => {
  
  function nameToImg(name) {
    let  x;
    switch (name) {
        case "Eshaan":
        x = dp1;
        break;
        case "Andrew":
        x = dp2;
        break;
        case "Liza":
        x = dp3;
        break;
        case "Jacob":
        x = dp4;
        break;
        case "Mustafa":
        x = dp5;
        break;
        case "Aaron":
        x = dp6;
        break;
        case "Esky":
        x = dp7;
        break;
        case "Kesh":
        x = dp3;
        break;
        case "Natalie":
        x = dp4;
        break;
        case "Timothee":
        x = dp5;
        break;
        case "Lee":
        x = dp6;
        break;
        case "casy":
        x = dp7;
        break;
    }
    return x;
  }

  let profile = nameToImg(props.text)

  return (
    <div className={classes.container}>
        <img src={profile} alt="image" className={classes.dp}/>
      <h4 className={classes.name}>{props.text}</h4>
    </div>
  );
};

export default ChatHead;
