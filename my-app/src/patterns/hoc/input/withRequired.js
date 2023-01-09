import React from "react";
import { InputGroup } from "./inputGroup";
import './style.css'

class withRequired extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isInvalid: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handelClick = this.handelClick.bind(this);
    }

    handleInput(event){
        this.setState({ [event.target.name]: event.target.value})
    };    
    handelClick(){
        const {requiredKeys} = this.props;
        const isInvalid = requiredKeys.some(key => !this.state[key])
        this.setState({isInvalid})
    }

    render() {
        return (
            <>
                <div>
                    {this.props.render({onChange: this.handleInput, onClick: this.handelClick})}
                </div>
                {this.state.isInvalid ? 'Error render prop' : null}
            </>
        )
    }
}

export const InputWithNameValidator = () => {
    return (
        <Wrapper
        requiredKeys={['first_name']}
        render={({onClick, onChange}) => {
                return(
                    <InputGrou onChange={(e)=> onChange(e)} onClick={()=>onClick()}/>
                )
            }
        }
         
        />
    );
}

export const InputWithEmailValidator = () => {
    return (
        <Wrapper
        requiredKeys={['first_name', 'email']}
        render={({onClick, onChange}) => {
                return(
                    <InputGrou onChange={(e)=> onChange(e)} onClick={()=>onClick()}/>
                )
            }
        }
         
        />
    );
}