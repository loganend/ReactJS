import dispatcher from "../dispatcher.js";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}


export function reloadTodos(){
	dispatcher.dispatch({
		type: "FETCH_TODOS"
	});
	setTimeout(()=> {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
				{
					id: 24313144,
					text: "wife hell",
					complete: false
				},
				{
					id: 1000011111,
					text: "laucka wbill",
					complete: true
				},
			]})
	}, 1000);
}