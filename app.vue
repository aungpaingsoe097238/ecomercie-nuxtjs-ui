<template>
  <div>
    <NuxtLayout>
      <div >
        <TopNavBar/>
        <div class="container nuxt-page">
          <NuxtPage />
        </div>
        <BottomMobileSideBar/>
        <BottomFooter />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .nuxt-page{
    margin-top: 160px;
  }
}
</style>
  