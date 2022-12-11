import React from 'react';
import Title from './Title';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {clicked: false}
  }

  render(){
    const { clicked } = this.state;
    
    if ( clicked ){
      return 'clicked'
    }

    return (
      <div>
        <Title title={'123'}/>
        <button onClick={()=> this.setState({clicked: true})}>Click me</button>
      </div>
      )
  }
}

export default Button;