import {
  GET_ALL_POSTS,
  GET_POST,
  GET_ALL_SPECIALITIES,
  GET_SPECIALITY,
  GET_ALL_COURSES,
  GET_COURSE,
  GET_ALL_TEACHERS,
  GET_FRAGMENT
} from "./actions"

const initialState ={
  specialities: []
}
export const postReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }
  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }
  return state
}
export const specialityReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_SPECIALITIES) {
    return {
      ...state,
      specialities: action.specialities
    }
  }
  if (action.type === GET_SPECIALITY) {
    return {
      ...state,
      speciality: action.speciality
    }
  }
  return state
}
export const courseReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses
    }
  }
  if (action.type === GET_COURSE) {
    return {
      ...state,
      course: action.course
    }
  }
  return state
}
export const teacherReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_TEACHERS) {
    return {
      ...state,
      teachers: action.teachers
    }
  }
  return state
}
export const classReducer = (state = initialState, action) => {
  if (action.type === GET_FRAGMENT) {
    return {
      ...state,
      fragment: action.fragment
    }
  }
  return state
}
