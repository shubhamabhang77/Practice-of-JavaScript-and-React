import React, {Component} from "react";

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            display: "data is not  yet fatched. Click here to fetch the data"
        }
        this.datafetch = this.datafetch.bind(this)
    }
    datafetch(event){
        console.log("shubham" + event.target.value)
        this.setState({isLoading: true, display: "loading...."})
        fetch("https://swapi.dev/api/people/1")
        .then(data => {
            console.log("got the data")
            return data.json()
        })
        .then(response => {
            console.log(response)
            this.setState({isLoading: false, display: "data is fetched"})
        })
        .catch(err => console.log("error found"))
    }


    render(){
        return(
            <div>
                <h1>Shubham abhang</h1>
                <p>{this.state.display}</p>

                <button value="abhang" onClick={this.datafetch}>Click here to fetch data</button>

            </div>
        )
    }

}



export default App;