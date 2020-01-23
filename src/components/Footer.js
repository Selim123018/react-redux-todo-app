import React from 'react'
import { connect } from 'react-redux'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters, removeComplete } from '../actions'
const Footer = ({dispatch, todos}) =>{
  const leftTodos = todos.reduce((count, { completed }) => completed ? count : count + 1, 0);
  const clearComplete=()=>{
    dispatch(removeComplete())
  }
  
  return(
    <div className="footer">
      <span>{ leftTodos } items left </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      <button onClick={()=>clearComplete()}>Clear Completed</button>
    </div>
  )
}

export default connect()(Footer);