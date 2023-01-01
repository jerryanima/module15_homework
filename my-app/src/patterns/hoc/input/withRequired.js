import React from "react";
import './style.css'


const withRequired = (Comment, requiredKeys) => {
    return class withRequired extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isInvalid:false}
        }

        handleInput(event){
            this.setState({ [ event.target.name ]: event.target.value })
        }




        render(){
            return (
                <>
                <Comment/>
                </>
            )
        }
    }
}