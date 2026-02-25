import React, { useState } from 'react'

// useState - управление состоянием
// состояние state - это данные которые могут изменяться в компаненте
// 

const State = () => {
    // Объявление хуков не считая контекст происходит в блоке перед return
    const [count,setCount] = useState(0);
    // Объявляем переменную состояния count с начальным значением 0
    // setCount = это функция для обновления этого состояния
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Вы кликнули {count}</button>
    </div>
  )
}

export default State



// Детальный разбор useState
// useState возвращает массив из двух элементов
// const stateArray = useState(initialValue);
// const value = stateArray[0] 
// // текущее значение
// const setter = stateArray[1]
// // функция для обноваления


// // чистая деструктизация
// const [value,setValue] = useState('ваше значение')
