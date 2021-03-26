import React from 'react';

import classes from './ProductPreview.module.css';
const ProductPreview = (props) =>{

    const curentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();

  const curentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className ={classes.ProductPreview}>

        <img src = {props.currentPreviewImage} alt="product Preview"/>
        {
          props.showHeartBeatSection ?
           <div className={classes.HeartBeatSection}>
          <i class="fas fa-heartbeat"></i>
            
          <p>78</p>
          </div>
           :
           <div className={classes.TimeSection}>
          <p>{`${curentHour}:${curentMinutes}`}</p>
          </div> 
        }


        

          
</div> 
   )
}
export default ProductPreview;