<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row" v-if="loading == false">
              <div class="col-12 col-lg-6">
                <img
                  :src="product.value.stocks[0]?.photos[0]"
                  class="w-100 p-5"
                  alt=""
                />
              </div>
              <div class="col-12 col-lg-6">

                <div class="h4 mb-0">{{ product.value.name }}</div>
 
                <hr />

                <div class="my-3 text-black-50">
                  {{ product.value.description }}
                </div>

                <hr />

                <div>
                  <table class="table small">
                    <thead>
                      <td>
                        Quantity
                      </td>
                      <td>
                        Category
                      </td>
                      <td>
                        Status
                      </td>
                    </thead>
                    <tbody class=" text-black-50">
                        <td>{{ product.value.stocks[0].quantity }}</td>
                        <td>{{ product.value.category.name }}</td>
                        <td>{{ product.value.stocks[0].stock_status }}</td>
                    </tbody>
                  </table>
                </div>

                <hr>

                <div>
                    <span class=""></span>
                    {{ 0 }}
                    <span></span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cookies from "js-cookie";
import axios from "axios";
const route = useRoute();
const config = useRuntimeConfig();
const product = reactive({});
const loading = ref(true);

const handleFetchProduct = async () => {
  loading.value = true;
  await axios
    .get(`${config.public.apiBase}/product/${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((res) => {
      loading.value = false;
      product.value = res.data.data;
      console.log(product.value);
    })
    .catch((error) => {
      loading.value = false;
      console.log(error.response);
    });
};

onMounted(() => {
  handleFetchProduct();
});
</script>

<style lang="scss" scoped></style>
