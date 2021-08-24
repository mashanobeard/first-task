import React from 'react';

import Button from '@material-ui/core/Button';



const Counter = (props) =>(

    <div >

  <h1>{"Current count  " + props.count}</h1>
      <Button variant="outlined" color="primary" onClick ={props.handleIncrement}>
        Increment

      </Button>
      <Button variant="outlined" color="secondary" onClick ={props.handleDecrement}>
       Decrement
      </Button>
      <Button variant="outlined" color="default" onClick ={props.handleReset}>
       Reset
      </Button>
      
     
    </div>
  );


export default Counter;
