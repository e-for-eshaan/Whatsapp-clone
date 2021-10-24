import classes from './SendMessage.module.css'
import sendbtn from "../images/sendbtn.svg"
const Send = () => {

    return (
            <form className={classes.container}>
            <input type="box" placeholder="Type a message"/>
            <a href=""><img src={sendbtn} alt="" className={classes.btn}/></a>
            </form>
    )
}
export default Send
