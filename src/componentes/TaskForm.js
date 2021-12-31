import React, {Component} from 'react';


export default class Tasks extends Component {
    
    state = {
        title: '',
    }
    
    onSubmit = event => {
        this.props.addTask(this.state.title)
        event.preventDefault();//no refrescar la pagina.
    }
    
    onchange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="write a text" onChange={this.onchange} value={this.state.title} />
                <input type="submit"/>
            </form>
        )
    }

}