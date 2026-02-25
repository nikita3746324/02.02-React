import React, { useState } from 'react'

const Stateform = () => {
// число
        const[age,setAge] = useState(0);
        // Строка
        const[name,setName] = useState('');
        // Булевый
        const [isActivate,setisActivate] = useState(false);
        // Массив
        const[hobbies,setHobbies] = useState([]);
        const [newhobby,setNewHobby] = useState('');
        // Объект
        const [data,useData] = useState({
            telephon:'',
            email:'',
            city:''
        });
        // обработчики событий
        const handleNameChange = (e) => setName(e.target.value)

        const handleDataChange = (e) => {
            const {name,value,type} = e.target;
            SVGMetadataElement(item => ({
                ...item,
                [name]:type === 'number' ? parent(value) || 0 : value
            }))
        }

        const addHobby = () => {
            if(newhobby.trim()){
                setHobbies([...hobbies,newhobby]);
                setNewHobby('')
            }
        }

  return (
    <div>
        <div>
            <label htmlFor="">Имя</label>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Текущее имя{name}</p>
        </div>
        <div>
            <h3>Данные</h3>
            <input type="text" value={data.telephon} onChange={handleDataChange} placeholder='телефон'/>
            <input type="text" value={data.email} onChange={handleDataChange} placeholder='почта'/>
            <p>{data.email}</p>
            <p>{data.telephon}</p>
            <input type="text" value={newhobby} onChange={(e) => setNewHobby(e.target.value)}/>
            <button onClick={addHobby}>Добавь хобби: {newhobby}</button>
            <p>Хобби: {hobbies}</p>
        </div>
    </div>

  )
}

export default Stateform