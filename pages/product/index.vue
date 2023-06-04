<template>
  <div class="container ">
    <div class="row g-3 ">
      <div class="col-6 col-lg-3" v-for="product in products" :key="product.id">
        <div class="card-item card d-flex flex-column">
          <div class="card-body">
            <div class="mb-3">
              <img :src='product.stocks[0].photos[0]' class="item-img" alt="" />
            </div>
            <p class="card-title fw-bold text-truncate">{{ product.name }}</p>
            <p class="card-text mb-2 text-black-50">
              {{ product.description.slice(0, 80) }}{{ product.description.length > 80 ? '...' : '' }}
            </p>
            <div
              class="d-flex justify-content-between align-items-center mt-auto"
            >
              <span class="fw-bold mb-0 text-warning ">$ <span>{{ product.stocks[0].price }}</span> </span>
              <button class="btn btn-outline-primary add-cart">
                <i class="bi bi-cart-plus pe-none"></i> Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import Cookies from "js-cookie";
const config = useRuntimeConfig();

const products = reactive([]);

const handleFetchProducts = async () => {
  await axios
    .get(`${config.public.apiBase}/product`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((res) => {
      products.push(...res.data.data);
      console.log(products);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

onMounted(() => {
  handleFetchProducts();
});
</script>

<style scoped>

.item-img{
    height: 150px;
    max-width: 100%;
}


</style>
