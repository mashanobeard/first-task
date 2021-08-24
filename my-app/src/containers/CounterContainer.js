import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter/index';




class CounterContainer  extends React.Component{
    constructor(props){
        super(props)

        this.state = {count: 0}
  
         this.handleIncrement = this.handleIncrement.bind(this) 
    }
   
    handleIncrement () {
        this.setState((state) =>({
            count: this.state.count + 1,
        }))
    }
 
    render(){

        const props ={
            handleIncrement: this.handleIncrement,
            count: this.state.count,

        }
 
      return(
          <Counter {...props}/>
      )  
    
      }
    }
CounterContainer.propTypes ={
    handleIncrement: PropTypes.func,
    count: PropTypes.number,
} 

export default CounterContainer;