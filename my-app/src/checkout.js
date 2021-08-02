import React from 'react';
import CheckoutContainer from './CheckoutContainer';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    
    marginLeft:50,
    marginTop:100,
   
    
  },
 
});






function Checkout() {
  const classes = useStyles();
  const counts= useSelector((state)=> state.checkout)
  console.warn(counts)
  
    
    return (
       <div className={classes.root}>
         { counts.map(i=>(
         <CheckoutContainer image={i.cart.image}/>)
        
         )
        }
       </div>
    )
}

export default Checkout
