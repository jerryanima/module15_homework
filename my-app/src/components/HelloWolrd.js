import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';


class HelloWolrd extends React.Component {
  render() {
    const personName = 'Mari';
    return (
      <Message name={personName}/>
    )
  }
}

class Message extends React.Component {
  render() {
    return <h1>
      <span>Hi! My name is </span>
      <span className='name_hello'>{this.props.name}</span>  
    </h1>
  }
}

Message.propTypes = {
  name: PropTypes.string
}

export default HelloWolrd;
