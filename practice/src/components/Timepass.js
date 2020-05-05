import React from "react";


class Timepass extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.counter = this.counter.bind(this)
    }

    counter(id){
        this.setState(prevState => ({ count: prevState.count + 1})); 
    }

    render(){
        return(
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={() => this.counter(2)}>Increase the constructor</button>
            </div>
        )
    }
}


export default Timepass;