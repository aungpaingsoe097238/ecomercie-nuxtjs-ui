<template>
    <div class="container">
        <div class="row mx-auto vh-100 justify-content-center align-items-center ">
            <div class="col-12 col-lg-5">
                <form @submit.prevent="handleLogin" @keydown.enter="handleLogin" class=" card p-3 d-flex gap-3 shadow-sm">
                    <div class=" h5">
                        Login Here
                    </div>
                    <div>
                        <label for="" class=" form-label">Email</label>
                        <input type="email" v-model="data.email" class=" form-control" placeholder="Enter your email:" required>
                    </div>
                    <div>
                        <label for="" class=" form-label">Password</label>
                        <input type="password" v-model="data.password" class=" form-control" placeholder="Enter your password:" required>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="small">
                            If you don't have a accout? <NuxtLink to="/auth/register"
                                class=" nav-link d-inline fw-bold cursor-pointer ">register</NuxtLink>
                        </span>
                        <button class=" btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuthStore } from '~/stores/myStore';

const config = useRuntimeConfig();
const store = useAuthStore();

const data = reactive(
    {
        'email': 'admin@gmail.com',
        'password': 'password'
    }
);

const handleLogin = async () => {
    await axios.post(`${config.public.apiBase}/login`,data).then((res)=>{
        if(res.data.data !== null){
            data.email = null;
            data.password = null;
            Cookies.set("user", JSON.stringify(res.data.data), { expires: 10 });
            Cookies.set("token", res.data.data.token, { expires: 10 });
            store.addToken()
            navigateTo('/product');
        }
    }).catch((error)=>{
        console.log(error.response.data.message)
    })
}

</script>

<style lang="scss" scoped></style>