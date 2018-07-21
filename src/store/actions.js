import * as type from './mutation-types'
export default {
  setCity (context, value) {
    context.commit(type.SET_CITY, value)
  }
}
