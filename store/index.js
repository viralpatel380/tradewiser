export const state = () => ({
    user : {
        name : 'John Doe',
    }
  })
  
  export const getters = {
    getUser(state) {
      return state.user
    }
  }
  
  export const mutations = {
    setUser(state, user) {
      state.user = user
    }
  }
  
  export const actions = {
    async fetchUser({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }