import classes from './Search.module.css'
const Search = (props) => {
    return (
        <div className={classes.container}>
            <input className={classes.search} type="text" placeholder={props.text}/>
        </div>

    )
}

export default Search
