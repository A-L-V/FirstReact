import React, {Component} from 'react';
import PropTypes from 'prop-types';




class Task extends Component {
    render(){
        const {task} = this.props;
        return (<div>
            <p key={task.id}>
                {task.title} - 
                {task.descripcion} -
                {task.id} - 
                {task.done}
                <button onClick={this.props.deleteTask.bind(this, task.id)}>

                </button>
            </p>
            </div>
        )
    }

}

Task.propTypes = {
    task: PropTypes.object.isRequired
}


export default Task;