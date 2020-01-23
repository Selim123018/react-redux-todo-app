import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from './Todo'
const TodoList = ({ todos, toggleTodo }) =>{
  return(
    <div>
      <ul>
        {todos? todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        )):''}
      </ul>
    </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect()(TodoList);