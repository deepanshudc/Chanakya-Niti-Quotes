import { useState } from 'react';
import classes from './Content.module.css'
import { fetchData } from '../api';
import img from '../assets/meditate.jpg'
import ImageComponent from './ImageComponent';
const Content=()=>{
    const [quote,setQuote]=useState('');

    const quoteGenerator= async()=>{
        const quote= await fetchData();
        let quoteManipulated=quote.text;
        quoteManipulated = quoteManipulated.replace(/;/g, "\n");
        setQuote(quoteManipulated);
       
    }
    return (   
        <div className={classes.content}>
            <div className={classes.box_1}>
                <ImageComponent></ImageComponent>
            {/* <div className={classes.image_container}>
            <img src={img} ></img>
            </div> */}

             </div>
             <div className={classes.box_2}>
            <h1>Chanakya Niti Quote</h1>
            {quote&&<>
            <p><span>&#8220; </span>{quote}  <span> &#8220;</span></p>
           
            </>
            }
            <button className={classes.button}
            onClick={quoteGenerator}>Click for Wisdom</button>
            </div>
        </div>
    )
}
export default Content;