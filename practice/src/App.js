import React, {Component} from "react";

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstname : "",
            lastname : "",
            age: "",
            gender : ""
        }
        this.textshow = this.textshow.bind(this)
    }


    textshow(event){
        const {name, value, checked, type} = event.target
        if (type === "checkbox"){
            this.setState({[name] : checked})
        }
        else{
            if(type==="text" && name==="age" && isNaN(value)){
                console.log("please enter the number in the age field")
            }
            else{
                this.setState({[name] : value})
                console.log(event.target.name)
            }   
        }
    }

    render(){

        return (
            <div>
                <form>
                    <label>FirstName:</label><input type="text" name="firstname" value={this.state.firstname} placeholder="name" onChange={this.textshow}></input><br></br>
                    <label>LastName:</label><input type="text" name="lastname" value={this.state.lastname} placeholder="name" onChange={this.textshow}></input><br></br>
                    <label>Age:</label><input type="text" name="age" value={this.state.age} onChange={this.textshow}></input><br></br>
                    <label><input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.textshow}/>Male</label> 
                    <label><input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.textshow}/>Female</label>
                <h1>{this.state.firstname} {this.state.lastname}</h1>
                <h1>{this.state.gender}</h1>
                </form>
            </div>
        )
    }
}



export default App;