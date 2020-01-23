import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../actions/index';

const Todo = ({dispatch, onClick, completed, text, checked, id }) => {
  
  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(text);  
  
  let input=useRef()

  const changeEditMode=()=>{
    setIsEditable(!isEditable)
  }

  const updateValue=(todoId)=>{
    dispatch(editTodo(todoId, input.value));
    setIsEditable(!isEditable);
  }
  const removeTodo=(todoId)=>{
    dispatch(deleteTodo(todoId))
  }
  return (
    <div
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {
        isEditable? <form onSubmit={()=>updateValue(id)} className="updateForm"><input type="text" name="text" defaultValue={text} ref={node => (input = node)} /></form>
        :<div className="todoList">
            <input type="checkbox" onClick={onClick} defaultChecked={checked}/>
            <li className="display_close" onClick={changeEditMode}>{todoText}</li>
            <button className="close" onClick={()=>removeTodo(id)}>X</button>
        </div> 
      }    
    </div>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
export default connect()(Todo);