import classes from './ImageComponent.module.css'
import img from '../assets/meditate.jpg'

const ImageComponent=()=>{
    return( <>
            <div className={classes.image_container|| classes.image_copy}>
            <img src={img}  ></img>
            </div>
            </>
    )
   
}

export default ImageComponent;