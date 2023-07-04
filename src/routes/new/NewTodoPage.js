import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage(){
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;


    return (
        <TodoForm
            title='Escribe tu nuevo TODO'
            submitEvent={addTodo}
            submitText='Añadir'
        />
    );
}

export { NewTodoPage };