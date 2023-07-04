import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage(){
    const location = useLocation();

    const params = useParams();
    const  id = Number(params.id);

    const { state, stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;
    const { loading, getTodo } = state;

    let todoText;

    if(location.state?.todo){
        todoText = location.state.todo.text;
    }
    else if(loading){
        return <p>Cargando...</p>
    }else{
        todoText = getTodo(id).text
    }

    return (
        <TodoForm
            title='Edita tu TODO'
            defaultTodoText={todoText}
            submitEvent={(newText) => editTodo(id, newText)}
            submitText='Editar'
        />
    );

}

export { EditTodoPage };