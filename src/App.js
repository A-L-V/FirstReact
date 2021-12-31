import react from 'react';
import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import Task from './example/tasks.json';
import Tasks from './componentes/Tasks.js';
import TasksForm from './componentes/TaskForm';
import Posts from './componentes/Posts.js'
// const helloWorld = () =>  <div id="hello"> hello word 2.0 confuncion ocnstante</div>
// //llaamda: {helloWorld()}

// class HelloWord2 extends react.Component {
//   //llamada: <HelloWord2 />
//   state = {
//     show: true
//   }
  
//   render() {
//     if(this.state.show){
//       return (
//       <div > hay elementos   
//       <button onClick={this.cambiarEstado}>
//         boton elementos
//       </button>
//       </div>);  
//     } else {
//       return (
//       <div> No hay elementos 
//             <button onClick={this.cambiarEstado}>
//             boton elementos
//       </button>
//       </div>
//       );  
//     }
//   }
// }

// class Toggle extends react.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Este enlace es necesario para hacer que `this` funcione en el callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
// const cambiarEstado = () => { 
//   this.setState({show: !this.state.show});
// }

// function HelloWord3(props) {
//   return (<div id="hello"> usando props {props.firstName}  xd  {props.lastName}  </div>);
// }

// const props = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

class Tareas extends react.Component {
  //llamada: <HelloWord2 />  
  state = {
    tasks: Task
  }
  
  addTask = titulo => {
    const newTask ={
      title: titulo,
      descripcion :"hola",
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = (id) => {
    const nuevasTareas = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: nuevasTareas});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Routes>
            <Route exact path="/" element={
              <div> 
                <TasksForm addTask={this.addTask}/>
                <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                </div>
              }/>
            <Route path="posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

function App() {
  return (
    <div >
      THis is a componente: <Tareas />
    </div>
  );
}

export default App;
