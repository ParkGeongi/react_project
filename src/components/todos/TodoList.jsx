import { useDispatch, useSelector } from 'react-redux'
import {} from '../../store'
import { deleteTodoAction, toggleTodoAction } from '../../store/todo.reducer'
import './TodoList.css'
const Todolist = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))
    return (<>

        <h2>할일 목록</h2>
        <table className='table'>
        <thead>
        <tr>
            <th>Todo list</th>

        </tr>
        </thead>
        <tbody>
        { todos.length === 0 && (<tr>
            <td>등록된 할 일이 없습니다</td>
        </tr>)}
        {todos.length !== 0 && (<tr>
            <td>등록된 할 일이 있습니다</td>
        </tr>)}

        </tbody>
        </table>

    </>)
    }
export default Todolist