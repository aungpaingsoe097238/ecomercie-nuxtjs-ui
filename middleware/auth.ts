import { useAuthStore } from "~/stores/myStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useAuthStore();
    console.log(store.getToken)   
    if(!store.getToken){
        return navigateTo('/auth/login');
    }
});
