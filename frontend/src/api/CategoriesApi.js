import { url, header } from './common/common'

export const getCategories = () => {
  console.log(`${url}/categories`)
  return fetch(`${url}/categories`, header).then(res => res.json())
}