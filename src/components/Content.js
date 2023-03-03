import classes from './Content.module.css'
const Content=()=>{
    return (   
        <div className={classes.content}>
            <div className={classes.box_1}>
            <p>place for image</p>

             </div>
             <div className={classes.box_2}>
            <h2>Chanakya Niti Quote</h2>
            <button className={classes.button}>Wisdom me</button>
            </div>
        </div>
    )
}
export default Content;