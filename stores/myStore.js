import { defineStore } from 'pinia'
import Cookies from "js-cookie"

export const useAuthStore = defineStore('auth', () => {
  const token = ref("")

  const getToken = computed(() => token.value )

  function addToken() {
    token.value = Cookies.get('token');
  }

  function removeToken() {
    Cookies.remove("user");
    Cookies.remove("token")
    token.value = "";
    console.log(Cookies.get('token'))
    console.log(Cookies.get('user'))
    console.log(token.value)
  }

  return { addToken, getToken, removeToken }
})
