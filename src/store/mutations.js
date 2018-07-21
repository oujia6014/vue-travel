import * as types from './mutation-types'

const mutaion = {
  [types.SET_CITY] (state, city) {
    state.city = city
  }
}
export default mutaion
