import React from 'react';
import Todo from "./components/Todo";
import "./components/style.css"
import todosData from "./components/todosData";
import Timepass from "./components/Timepass";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.onHandleClick = this.onHandleClick.bind(this)
  }
  
  componentDidMount(){
    console.log("loading done!!")
  }

  onHandleClick(id){
    this.setState(() => {
      const tp = [];
      for(let i = 1; i < 4; i++){
        tp.push(this.state.todos[i-1])
        if(id === i){
          console.log("getting changed")
          tp[i-1].completed = !tp[i-1].completed
        }
      }
      console.log(tp[0].completed, tp[1].completed, tp[2].completed)
      return {
        todos: tp
      }
    })
  }

  
  render(){

    const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item} 
      onHandleClick={this.onHandleClick}/>)
    
    
    return (
      <div className="todo-list">
        <h1>Shubham Abhang</h1>
        {todoItems}
        <Timepass/>
      </div>
    )
  }

}


export default App;
