import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../views/Counter/index';


class CounterContainer  extends React.Component{
    constructor(props){
        super(props)

        this.state = {count: 0}
  
         this.handleIncrement = this.handleIncrement.bind(this) 
         this.handleDecrement = this.handleDecrement.bind(this) 
         this.handleReset = this.handleReset.bind(this) 
    }
   
    handleIncrement () {
        this.setState((state) =>({
            count: this.state.count + 1,
        }))
    }
    handleDecrement (){
        this.setState((state) =>({
            count: this.state.count - 1,
        }))
    }
    handleReset (){
        this.setState((state) =>({
            count: 0 ,
        }))
    }
 
    render(){

        const props ={
            handleIncrement: this.handleIncrement,
            count: this.state.count,
            handleDecrement: this.handleDecrement,
            handleReset: this.handleReset,

        }
 
      return(
          <Counter {...props}/>
      )  
    
      }
    }
CounterContainer.propTypes ={
    handleIncrement: PropTypes.func,
    count: PropTypes.number,
    handleDecrement: PropTypes.func,
    handleReset: PropTypes.func,
} 

export default CounterContainer;