import { useEffect, useState } from 'react';
import './App.css';
import { display, add, del, upd } from './Services/toDoservice';

function App() {
    const [todoItem, setTodoItem] = useState('');
    const [allTodo, setAllTodo] = useState([]);

    useEffect(() => {
        display().then((response) => {
            setAllTodo(response.data)
        }).catch(err => {
            console.error(err)
        })
    })

    const handleAdd = (e) => {
        e.preventDefault();
        add({"title": todoItem}).then((response) => {
            allTodo.push(todoItem);
            setTodoItem('')
        })
    }

    const handleEdit = (id) => {
        const newTitle = prompt("Edit the task");
        console.log(id + newTitle);
        upd(id, {"id": id, "title": newTitle}).then((response) =>{
            console.log(response);
        })

    }

    const handleDelete = (id) => {
        del(id).then((response) => {
            allTodo.filter(obj => obj.id!==id)
            console.log(allTodo)
        }).catch(err => console.log(err))
    }

  return (
    <>
    <div className="box" id="heading">
        <h1>
            Todolist
        </h1>
    </div>

    <div className="box">

            <form >
                <div className="item">
                    {allTodo.map((e, i) => (<div key={i} className='todoItem'>
                        <input type="checkbox" name="checkbox"/>
                        <p className=''>{e.title}</p>
                        <div className='svgs'>
                        <svg  onClick={() => handleEdit(e.id)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                        <svg onClick={() => handleDelete(e.id)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                        </div>
                        </div>
                    ))}
                </div>    
                <input type="hidden" name="listName"/>
            </form>

                <form className="itemx">
                    <input value={todoItem} onChange={e => setTodoItem(e.target.value)} type="text" name="newItem" placeholder="Enter new item"  />
                    <button name="list" onClick={handleAdd}>+</button>
                </form>
    </div>
    </>
  );
}

export default App;
