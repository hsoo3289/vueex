import MemberConstant from './MemberConstant'
import axios from 'axios'

export default {
  [MemberConstant.LOGIN]: (store, payload) => {
    console.log(store, payload);
    fetch.get( MemberConstant.URL.LOGIN, {params: {id: store.getters.member.id, password: store.getters.member.password}})
    .then(res => console.log(res));
  }
}