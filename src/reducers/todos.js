const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
            checked:''
          }
        ]

      case 'EDIT_TODO' :
        return state.filter(x => x.id === action.id ?
          state[x.id].text=action.text: x );

      case 'DELETE_TODO' :
        return state.filter(x => x.id !== action.id);    

      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed, checked: "checked" } : todo
        )

      case 'REMOVE_COMPLETE' :
        state.filter(t => t.completed === true).forEach(x =>{
          return state.splice(state.indexOf(x), 1)
        });  

      case "SHOW_ALL" :
        return [...state]

      default:
        return state
    }
  }
  export default todos