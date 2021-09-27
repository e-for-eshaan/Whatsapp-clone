import classes from "./ChatHead.module.css";

import images from "./../images/images.data";

const ChatHead = (props) => {
  
  function nameToImg(name) {
    let  x;
    switch (name) {
        case "Eshaan":
        x = images.dp1;
        break;
        case "Andrew":
        x = images.dp2;
        break;
        case "Liza":
        x = images.dp3;
        break;
        case "Jacob":
        x = images.dp4;
        break;
        case "Mustafa":
        x = images.dp5;
        break;
        case "Aaron":
        x = images.dp6;
        break;
        case "Esky":
        x = images.dp7;
        break;
        case "Kesh":
        x = images.dp3;
        break;
        case "Natalie":
        x = images.dp4;
        break;
        case "Timothee":
        x = images.dp5;
        break;
        case "Lee":
        x = images.dp6;
        break;
        case "casy":
        x = images.dp7;
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
