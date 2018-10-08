import MemberConstant from './MemberConstant'

export default {
  [MemberConstant.LOGIN]: (state, payload) => {
    console.log( state, payload );
  }
}