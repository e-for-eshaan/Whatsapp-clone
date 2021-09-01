import classes from './Head.module.css'
import myDP from './dp_my.jpg'
const Head = () => {
    return (
        <div className={classes.container}>
            <img src={myDP} alt="xx" className={classes.dp}/>
        </div>
    )
}

export default Head
