import classes from './SendMessage.module.css'
import Aaron from "../data/Aaron.data";
import sendbtn from "../images/sendbtn.svg"
const Send = () => {
    function append(x)
    {
        var q ="hi"
        Aaron.push(q)
    }
    return (
            <form className={classes.container}>
            <input type="box" placeholder="Type a message"/>
            <a href=""><img src={sendbtn} alt="" className={classes.btn}/></a>
            </form>
    )
}
export default Send
