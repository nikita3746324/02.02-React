import React, { useState } from 'react'
// Примеры с разными типами данных хука состояния

const Statetests = () => {
    // число
    const[age,setAge] = useState(25);
    // Строка
    const[name,setName] = useState('Боба');
    // Булевый
    const [isActivate,setisActivate] = useState(false);
    // Массив
    const[hobbies,setHobbies] = useState(['чтение','комп.игры']);
    // Объект
    const [data,useData] = useState({
        telephon:'88005553535',
        email:'boba@yandex.ru',
        city:'Оренбург'
    });
  return (
    <div>
        <p>Имя {name}</p>
        <p>Возраст {age}</p>
        <p>Статус {isActivate ? 'Активен':'Не активен'}</p>
        <p>Хобби:{hobbies.join(',')}</p>
        <p>Данные:{data.city},{data.email},{data.telephon}</p>

        <button onClick={() => setName('Жоба')}>Изменить имя</button>
        <button onClick={() => setAge(age + 1)}>Увеличить возраст</button>
        <button onClick={() => setisActivate(!isActivate)}>Переключи</button>
        <button onClick={() => setHobbies([...hobbies,'програмирование'])}>Добавь хобби</button>
        <button onClick={() => setData({...data,city:data.cuty +1})}>nfdfd</button>

    </div>
  )
}

export default Statetests