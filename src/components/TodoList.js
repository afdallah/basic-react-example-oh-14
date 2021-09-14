import { useState } from 'react'
import List from './List'
import InputBox from './InputBox'

import '../style/todolist.css'

export default function TodoList () {
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(null)

  function addTodo (newTodo) {
    // update todos

    const updated = [...todos]
    updated.push({ key: todos.length + 1, text: newTodo }) //

    setTodos(updated)
  }

  function removeTodo (key) {
    setTodos(
      todos.filter(function (item) {
        return item.key !== key
      })
    )
  }

  function updateTodo (todo) {
    setIsEditing(todo)
  }

  return (
    <div className='todos'>
      <h2>Todo App</h2>

      <InputBox addTodo={addTodo} />
      <List
        items={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        isEditing={isEditing}
      />
    </div>
  )
}
