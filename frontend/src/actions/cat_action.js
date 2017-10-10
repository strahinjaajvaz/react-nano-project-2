export const ADD_CATEGORIES = 'ADD_CATEGORIES'

export function addCategores(cats){
  return {
    type: ADD_CATEGORIES,
    cats
  }
}