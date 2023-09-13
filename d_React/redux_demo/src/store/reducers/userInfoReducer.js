export default function userInfoReducer(
  state = {
    name: 'nan',
    sex: 1,
    age: 18,
  },
  action
) {
  switch (action.type) {
    case 'SET_USER_INFO':
      console.log('userInfo-action', action)
      state.age++
      return state
    default:
      return state
  }
}
