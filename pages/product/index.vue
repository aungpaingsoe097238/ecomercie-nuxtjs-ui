<template>
    <div class="container">
        <div class="row">
            <div class="col-6 col-lg-3"></div>
            <div class="col-6 col-lg-3"></div>
            <div class="col-6 col-lg-3"></div>
            <div class="col-6 col-lg-3"></div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import Cookies from 'js-cookie'
const config = useRuntimeConfig();

const products = reactive([]);

onMounted(async () => {
    await axios.get(`${config.public.apiBase}/product`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    }).then((res)=>{
        products.push(...res.data.data)
        console.log(products)
    }).catch((error)=>{
        console.log(error.response)
    })
})

</script>