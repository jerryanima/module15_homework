import React from "react";

class SharedComponent extends React.Component {
    render(){
        return (
            <div>
                {this.props.children({prop: 'My children prop'})}
            </div>
        )
    }
}

const RenderPropComponent = () => 
    <SharedComponent>
        {({ prop }) => (
        <h1>
            <b>{prop}</b>
        </h1>
        )}
    </SharedComponent>

export default RenderPropComponent;   