import { ref } from 'vue';

export const useUtils = () => {
  const text = ref<string>(''); // Reactive ref to store data

  const sayHello = (msg: string) => {
    text.value = msg; // Update the ref value with the provided message
  };

  return {
    text,
    sayHello
  };
};