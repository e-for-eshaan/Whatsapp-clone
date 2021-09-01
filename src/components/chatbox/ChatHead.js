import classes from './ChatHead.module.css'
import { useState } from 'react';

const ChatHead = (props) => {
  var nameTitle = props.text;
  const [name, setname] = useState("Eshaan")
  
  return (
      <div className={classes.container}>
        <div className={classes.dp}></div>
        <h4 className={classes.name}>{name}</h4>
      </div>
  );
};

export default ChatHead;
