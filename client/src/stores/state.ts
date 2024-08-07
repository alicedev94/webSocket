import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    admin: 'alicedev94',
    rol: 0
  }),
  getters: {
    upperCase: (state) => state.admin.toLocaleUpperCase(),
  },
  actions: {
    incremet () {
      this.rol++
    } 
  }
})
