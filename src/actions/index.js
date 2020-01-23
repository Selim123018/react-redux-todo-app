let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const removeComplete = () => ({
  type: 'REMOVE_COMPLETE'
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const showAll=()=>({
  type: 'SHOW_ALL'
})

export const showComplete=()=>({
  type: 'SHOW_COMPLETE'
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}