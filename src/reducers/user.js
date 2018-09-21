import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { LOGIN } from 'actions/user'

const initialState = fromJS({
  token: null,
})

export default handleActions(
  {
    [`${LOGIN}_FULFILLED`]: (state, { payload: data }) =>
      state.set('token', data),
  },
  initialState
)
