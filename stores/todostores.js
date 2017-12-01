import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js";

class TodoStore extends EventEmitter {
	constructor(){
		super()
		this.todos = [
			{
				id: 112342323,
				text: "sadfjllsdfj",
				complete: false
			},
			{
				id: 134299302,
				text: "Pay Billes",
				complete: false
			},
		];
	}

	createTodo(text){
	  	const id = Date.now();

	  	this.todos.push({
	  		id,
	  		text,
	  		complete: false,
	  	});

	  	this.emit("change");
	}

	getAll(){
		return this.todos;
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO": {
				this.createTodo(action.text); 
			}
			case "RECEIVE_TODOS": {
				this.todos = action.todos;
				this.emit("changes");
			}
		}
		this.emit("change");
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

window.todoStore = todoStore;
export default todoStore;