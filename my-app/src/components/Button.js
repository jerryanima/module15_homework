import React from 'react';
import Time from './Time';
import ErrorBoundry from './Error';

class Button extends React.Component {
  state = {clicked: false, hasError: false}
  /*constructor(props){
    super(props);
    this.state = {clicked: false, hasError: false}
    this.hadleClick = this.hadleClick.bind(this)
  }

  hadleClick(){
    this.setState(state => ({
      clicked: true
    }));
  }*/
  
  hadleClick = (e) => {
    console.log(e);
    this.setState(state => ({
      clicked: true
    }));
  }
  

  render(){
    const { clicked } = this.state;
    
    if ( clicked ){
      return 'clicked'
    }

    return (
      <div>
        <ErrorBoundry>
          <Time/>
        </ErrorBoundry>
        <button onClick={e => this.hadleClick(e)}>Click me</button>
      </div>
      )
  }
}

export default Button;