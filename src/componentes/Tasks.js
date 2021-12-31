import React, {Component} from 'react';
import { render } from 'react-dom';
import Task from './Task.js';
import PropTypes from 'prop-types';

class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id}
            deleteTask={this.props.deleteTask} 
        />)
    }

}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks;
