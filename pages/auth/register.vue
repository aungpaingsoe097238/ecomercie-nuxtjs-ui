<template>
    <div class="container">
        <div class="row mx-auto vh-100 justify-content-center align-items-center ">
            <div class="col-12 col-lg-5">
                <form @submit.prevent="handleRegister" @keydown.enter="handleRegister" action="" class=" card p-3 d-flex gap-3 shadow-sm">
                    <div class=" h5">
                        Register Here
                    </div>
                    <div>
                        <label for="" class=" form-label">Name</label>
                        <input type="text" v-model="data.name" class=" form-control" placeholder="Enter your name:" required>
                    </div>
                    <div>
                        <label for="" class=" form-label">Email</label>
                        <input type="email" v-model="data.email" class=" form-control" placeholder="Enter your email:" required>
                    </div>
                    <div>
                        <label for="" class=" form-label">Password</label>
                        <input type="password" v-model="data.password" class=" form-control" placeholder="Enter your password :" required>
                    </div>
                    <div>
                        <label for="" class=" form-label">Confirm Password</label>
                        <input type="password" v-model="data.password_confirmation" class=" form-control" placeholder="Enter your password confirmation:"
                            required>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="small">
                            I have already an account <NuxtLink to="/auth/login"
                                class=" nav-link d-inline fw-bold cursor-pointer ">login</NuxtLink>
                        </span>
                        <button class=" btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';

const config = useRuntimeConfig();

const data = reactive({
    'name' : null,
    'email' : null,
    'password' : null,
    'password_confirmation' : null
});

const handleRegister = async () => {
    await axios.post(`${config.public.apiBase}/register`,data).then((res)=>{
        data.email = null;
        data.name = null;
        data.password = null;
        data.password_confirmation = null;
        navigateTo('/auth/login');
    }).catch((error)=>{
        console.log(error.response)
    })
}


</script>

<style lang="scss" scoped></style>