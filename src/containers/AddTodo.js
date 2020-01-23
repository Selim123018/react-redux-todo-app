import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
const AddTodo = ({ dispatch, todos}) => {
  
  let input
  const handleSubmit=e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}> 
      {
       todos.length>0?
       <span className="inpuArrow"><i className="arrow down"></i></span>
       : ''
      }
      
      <input placeholder="What need to be done?" ref={node => (input = node)} />
      </form>
    </div>
  )
}

export default connect()(AddTodo)