import { ADD_CATEGORIES } from '../actions/cat_action'

const defaultStore = {
  categories: [],
  posts: [],
  comments: []
}

export function categories(state = defaultStore, action) {
  switch(action.type){
    case ADD_CATEGORIES: {
      return {...state, categories: action.cats}
    }
    default: return state
  }
}