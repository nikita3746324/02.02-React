import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL_TASK = 'http://localhost:8000/tasks/tasks/'

const Task = () => {


    const [tasks,setTasks] = useState([]);
    const [title,setTitle] = useState('');

    useEffect(()=>{
        fetchTasks();
    },[]);


    const fetchTasks = async () => {
        try {
            const response = await axios.get(API_URL_TASK)
            setTasks(response.data)
        } catch (error) {
            console.error('Ошибка при загрузке данных')
        }
        
    };

    const addTask = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try{
            await axios.post(API_URL_TASK,{
                title:title.trim(),
                complited:false
            });
            setTitle('');
            await fetchTasks();
        } catch (error) {
            console.error('Ошибка при отправке данных')
        } 
    };
    const deleteTask = async (id) => {
        try{
            await axios.delete(`${API_URL_TASK}${id}/`)
            await fetchTasks();
        } catch(error) {
            console.error('Ошибка при удалении')
        }
    }


  return (
    <div>
        <h1>ЗАДАЧИ</h1>
        <form onSubmit={addTask}>
            <input type="text"
            value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
            <button type='submit'>Добавить</button>
        </form>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={()=>deleteTask(task.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Task