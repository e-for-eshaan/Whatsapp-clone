import classes from "./Recieved.module.css";

const Recieved = (props) => {
  let image = null;
  if (props.image) {
    image = <img src={props.src} alt="none" className={classes.image} />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.recieved}>
        {image}
        <p className={classes.message}>{props.text}</p>
        <p className={classes.time}>{props.time}</p>
      </div>
    </div>
  );
};

Recieved.defaultProps = {
  time: "7:24 PM",
  text: "Lorem ipsum  consectetur adipisicing elit. Autem doloribus optio cupiditate earum! Quos architecto consequuntur sunt? Ducimus, odit excepturi. xxxxxxxxxx xxx ss ss ss xxxxxxxxxxxx",
};

export default Recieved;
