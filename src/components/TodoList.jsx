import React, {Component} from 'react';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';

@observer
class TodoList extends Component {	
	render() {
		const todoListHtml = this.props.store.todoList.map((todo) => {
			return (
				<TodoItem todo={todo.text} key={todo.id} id={todo.id} onTodoClick={this.props.onTodoClick} />
			)
		});

		return (
			<ul>
				{todoListHtml}
			</ul>
		)
	}
}

export default TodoList;