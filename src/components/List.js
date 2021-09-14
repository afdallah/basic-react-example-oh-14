import React from 'react'

function List (props) {
  return (
    <React.Fragment>
      <ul>
        {props.items.length
          ? props.items.map(todo => {
              if (props.isEditing && props.isEditing.key === todo.key)
                return (
                  <>
                    <form action=''>
                      <input type='text' name='' id='' value={todo.text} />
                      <input type='submit' value='Update' />
                    </form>
                  </>
                )

              return (
                <li key={todo.key}>
                  <span>{todo.text}</span>

                  <div>
                    <i
                      className='fas fa-pencil-alt'
                      onClick={() => props.updateTodo(todo)}
                    ></i>
                    <i
                      className='fas fa-trash-alt'
                      onClick={() => props.removeTodo(todo.key)}
                    ></i>
                  </div>
                </li>
              )
            })
          : ''}
      </ul>
    </React.Fragment>
  )
}

export default List
