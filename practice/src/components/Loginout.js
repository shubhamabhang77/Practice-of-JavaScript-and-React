import React from "react";


class Loginout extends React.Component{
    constructor(){
        super()
        this.state={
            log: false
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({log: !this.state.log})
        console.log("i am working")
    }
    render(){
        const temp = this.state.log ? "in " : "out"
        return (
            <div>
                <p>You are currently loged {temp}</p>
                <button
                    onClick={this.onClick}
                >Click here to log{this.state.log ? "out" : "in"}</button>
            </div>
        )
    }
}



export default Loginout;