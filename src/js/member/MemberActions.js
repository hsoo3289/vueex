import MemberConstant from './MemberConstant'
import axios from 'axios'
import Qs from 'qs'
//import URLSearchParams from 'url-search-params-polyfill'

export default {
  [MemberConstant.LOGIN]: (store, payload) => {
    console.log(store, payload);
    console.log(Qs.stringify(payload));
    axios.post( MemberConstant.URL.LOGIN, Qs.stringify(payload))
    .then(res => console.log(res));
  },
  test: (store, payload) => {
    console.log("test:", store, payload);
    console.log(Qs.stringify(payload));
    axios.post( '/api/test', Qs.stringify(payload))
    .then(res => console.log(res));
  },
  logout: (store, payload) => {
    axios.get('/api/logout').then( res=> console.log(res));
  },
  test2: (store, payload) => {
    console.log("asdf");
    axios.post( '/api/test.around', {asdf:"asdf"})
    .then(res => console.log(res));
  }
}