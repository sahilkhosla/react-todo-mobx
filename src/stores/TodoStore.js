import { observable, action, computed } from 'mobx';

class TodoStore {
	@observable todoList;
	@observable header;

	constructor() {
		const id = Date.now();
		this.todoList = [{text: 'first item', id}];
		this.header = 'MobX';
	}

	@action addTodo(text) {
		this.todoList.push({
			text,
			id: Date.now()
		});
		console.log('[store] added todo')
	}

	@action deleteTodo(id) {
		const todoList = this.todoList.filter((todo) => {
			return todo.id != id;
		});	
		this.todoList = todoList
	}

	@computed get report() {
		return `total todos = ${this.todoList.length}`;
	}

}

const todoStore = window.todoStore = new TodoStore();

export default todoStore;
