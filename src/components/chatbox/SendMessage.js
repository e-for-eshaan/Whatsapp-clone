import classes from './SendMessage.module.css'
import Aaron from "../data/Aaron.data";
// import Eshaan from "../data/Eshaan.data";
// import Andrew from "../data/Andrew.data";
// import Liza from "../data/Liza.data";
// import Jacob from "../data/Jacob.data";
// import Mustafa from "../data/Mustafa.data";
// import Esky from "../data/Esky.data";
// import Kesh from "../data/Kesh.data";
const Send = () => {
    function append(x)
    {
        var q ="hi"
        Aaron.push(q)
    }
    return (
            <form className={classes.container}>
            <input type="box" placeholder="Type a message"/>
            <button type='submit' className={classes.btn} onClick={append}>hi</button>
            </form>
    )
}
export default Send
