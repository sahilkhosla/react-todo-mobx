import React from 'react';

const TodoItem = ({todo, id, onTodoClick}) => {
	return (
		<li onClick={() => onTodoClick(id)}>
			{todo}
		</li>
	)
}

export default TodoItem;