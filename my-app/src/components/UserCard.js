import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

/*Реализуйте компонент «Карточка пользователя», в который через 
props передаются имя, адрес электронной почты и ссылка на аватар 
пользователя. Карточка пользователя уже свёрстана в заготовке решения, 
вам необходимо только «пробросить» значения props в компонент.*/

class UserCard extends React.Component {
  render() {
    const name = this.props.name;
    const avatar = this.props.avatar;
    const email = this.props.email;
    return (
      <div className='card'>
        <img src= {avatar} width="30px" height="30px"/>
        <div className='card-data'>
          <div className='name'>{name}</div>
          <div className='email'>{email}</div>
        </div>
      </div>
    )
  }
}

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}


