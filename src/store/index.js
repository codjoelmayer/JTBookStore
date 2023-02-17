import { createStore } from 'vuex'
import axios from 'axios';
const bStoreURL = "https://jtbookstore-w301.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.patch(`${bStoreURL}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${bStoreURL}register`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context) {
      let res = await axios.get(`${bStoreURL}users`);
      let {results} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', "Something went wrong");
      }
    },
    async updateUser(context, payload) {
      let res = await axios.put(`${bStoreURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      console.log(`Delete: ${id}`);
      let res = await axios.delete(`${bStoreURL}user/${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})
