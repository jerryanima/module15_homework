import React from "react";

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    
    componentDidMount() {
        //вызвать, когда компонент уже в DOM
        this.timeID = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    //Статичный метод в монтировании
    static getDerivedStateFromProps(){

    }

    componentWillUnmount() {
        //вызвать, когда компонент будет удален из DOM
        clearInterval(this.timeID);

    }

    componentDidUpdate(prevProps) {
        //выполняется какая то логика
    }

    render(){
        const { date } = this.state;
        return <div>{date.toLocaleTimeString()}</div>
    }
};

export default Time;