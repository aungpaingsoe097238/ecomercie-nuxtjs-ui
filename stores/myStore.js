import { defineStore } from 'pinia'

export const useCounterStore = defineStore("counter", () => {
  const user = ref({})
  const token = ref('');
  const getUser = computed(() => user.value );
  const getToken = computed(() => token.value );

  function addToken(token) {
    token = token
  }

  function addUser(user){
    token.value = user
  }

  return { user, token, getUser, getToken, addToken, addUser };
});
