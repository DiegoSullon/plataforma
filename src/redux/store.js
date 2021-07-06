import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {
  postReducer,
  specialityReducer,
  courseReducer,
  classReducer,
  teacherReducer
} from "./reducers"
export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    classReducer,
    teacherReducer
  }),
  applyMiddleware(thunk)
)
