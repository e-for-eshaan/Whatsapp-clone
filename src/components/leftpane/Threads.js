import React from "react";
import classes from "./Threads.module.css";

const Threads = (props) => {
  return (
    <div onClick={()=>{props.clickfunc(props.name)}} className={classes.container}>
        <img src={props.address} className={props.image} alt="dp" />
        <div className={classes.text}> 
        <div className={classes.left}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.msg}>{props.message}</div>
        </div>
        <div className={classes.right}>
            <div className={classes.time}>{props.time}</div>
            <i className={classes.shape131}></i>

        </div>
        </div>
    </div>
  );
};

export default Threads;
