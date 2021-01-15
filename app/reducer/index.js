import { combineReducers } from 'redux'

import actions from '~actions'

// 根据action自行创建reducers 原则一个reducer对应一个action,一个action对应多个reducer则封装函数传入执行
console.log(actions)
const createReducers = (actions, createReducerList = {}) => {
  Object.keys(actions).map((key) => {
    return (createReducerList[`${key}Reducer`] = (dispatchFns, newData, types) => {
      const action = actions[key]()
      return (state = {}, action) => {
        const { type } = actions[key]()
        dispatchFns(state, data)
        // return {...state,action()}
      }
    })
  })
  return createReducerList
}

console.log(createReducers(actions))

// export default combineReducers({
//   ctrlsReducers,
//   showReducers,
// })

const mapReducers = (createReducerList) => {
  createReducerList.fetchListDemoA1Reducer
}

// function ctrlsReducers(state = initState, action) {
//   switch (action.type) {
//     case ADD_ITEM:
//       return Object.assign({}, state, { todoList: addItemReducer(state.todoList, action.data) })
//     case DLE_ITEM:
//       return Object.assign({}, state, { todoList: delItemReducer(state.todoList, action.data) })
//     case TO_HISTORY:
//       return Object.assign({}, state, { visible: toHistoryReducer(state.todoList, action.data) })
//     default:
//       return state
//   }
// }

// function showReducers(state = initState, action) {
//   switch (action.type) {
//     case SHOW_ALL:
//       return { visible: SHOW_ALL }
//     case SHOW_HISTORY:
//       return { visible: SHOW_HISTORY }
//     case SHOW_CURRENT:
//       return { visible: SHOW_CURRENT }
//     default:
//       return { visible: SHOW_ALL }
//   }
// }

// function addItemReducer(todoList, data) {
//   let [{ id }, ...rest] = todoList.reverse()
//   let { text } = data
//   return [
//     ...todoList,
//     {
//       id: id + 1,
//       text: text,
//       history: false,
//     },
//   ]
// }

// function delItemReducer(todoList, data) {
//   let { id } = data
//   return todoList.filter((item) => item.id !== id)
// }

// function toHistoryReducer(todoList, data) {
//   let { id } = data
//   return todoList.map((item) => {
//     if (item.id === id) {
//       return {
//         ...item,
//         history: true,
//       }
//     }
//   })
// }

// export default combineReducers({
//   ctrlsReducers,
//   showReducers,
// })
