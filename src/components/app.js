import React, { Component } from 'react';
import TodoList from './TodoList';
import { observer } from 'mobx-react';

@observer
class App extends Component {	

	//constructor for "App" component
	constructor(props) {
		super(props);

		//initialize state with an empty todoList
		this.state = {
			todoInput: 'What needs to be done today?'
		};
	}

	//required render method
	render() {
		return (
			<div>
				<p>React Todo ({this.props.store.header})</p>
				<p>Report: {this.props.store.report}</p>
				<input 
					onKeyPress={this.handleAddEvent} 
					onChange={this.handleInputChange}
					onClick={() => this.setState({todoInput: ''})}
					value={this.state.todoInput} />						
				<TodoList 
					store={this.props.store}
					onTodoClick={id => this.handleClickEvent(id)} />				
			</div>
		);
	}

	handleAddEvent = (event) => {
		if(event.key == 'Enter') {
			//call addTodo method on store
			this.props.store.addTodo(event.target.value);

			//clean input box
			this.setState({todoInput: ''});			
		} 
	}

	handleInputChange = (event) => {
		const todoInput = event.target.value;
		this.setState({todoInput});		
	}

	handleClickEvent = (id) => {
		this.props.store.deleteTodo(id)
	}
}

export default App;