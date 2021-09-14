import React, { useState, useRef } from 'react'

// 1. handler untuk nangkep string di dalam inputnya onChange
// 2. handler untuk ngebaca submit.
function InputBox (props) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  function inputHandler (evt) {
    setInput(evt.target.value)
  }

  // Lifting state
  function submitHandler (evt) {
    // Disable page refresh ketika tombol submit ditekan.
    evt.preventDefault()
    props.addTodo(input)
    // Kosongkan input text setelah di submit
    setInput('')
    inputRef.current.focus()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          ref={inputRef}
          onChange={evt => inputHandler(evt)}
          value={input}
          placeholder='Memasak...'
        />
        <input type='submit' value='Add' disabled={!input} />
      </form>
    </>
  )
}

export default InputBox
