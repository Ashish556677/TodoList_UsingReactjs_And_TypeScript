import TodoTypes from "./todo";

const Local_Storage_key= 'todos';
const TodoService ={
    //get todods to retrives the list of todos
    getTodos:() :TodoTypes[]=>{
        const todoStr = localStorage.getItem(Local_Storage_key) //retrive the String from the local storage using key Local_Storage_key
        return todoStr ? JSON.parse(todoStr): []; //it check if todo string is true then it will return the todo string else it will return empty array
    },
    //Adding Todos
    addTodos: (text:string): TodoTypes =>{
        const todos =TodoService.getTodos();
        const newTodo: TodoTypes={id: todos.length +1, text,completed:false};

        const updateTodos =[...todos, newTodo];
        localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos));

        return newTodo;
    },

    //Updating the Todos
    UpdateTodo : (todo:TodoTypes): TodoTypes =>{
        const todos =TodoService.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos));
        return todo;

    },

    //Deleting todo
    deleteTodo : (id:number): void =>{
        const todos =TodoService.getTodos();
        // const updateTodos = todos.filter((t) => t.id !== id);
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos));

    }

}
export default TodoService;


