import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
const TodoApp = ({todos}) => (
  <div className="todoApp">
    <div className="heading">todos</div>
    <div className="todo">
      <AddTodo todos={todos}/>
      <VisibleTodoList />
      {
        todos.length>0?
        <Footer todos={todos} />
        :''
      }
    </div>
  </div>
)

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(TodoApp);