<template>
    <!-- Hero -->
    <div class="card ">
        <div class="card-body">
            <div class="row gap-3 gap-lg-0">
                <div class="col-12 col-lg-3 d-none d-lg-block">
                    <ul class=" list-unstyled h-100 d-flex justify-content-between flex-column gap-2 ">
                        <li v-for="(menu,
                            index) in topMenus">
                            <span :key="index"></span>
                            {{ menu.title }}
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-7">
                    <div class=" h-100 rounded-2 shop-img ">
                        <div class="  d-flex flex-column gap-2 p-3">
                            <span class=" h4 mb-0 fw-medium">Latest trending</span>
                            <span class=" h3 mb-0 fw-bold">Electronic items</span>
                            <div class=" d-block mt-2">
                                <button class=" btn btn-light fw-bold border shadow-sm">learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-2">
                    <div class=" d-flex flex-column h-100 justify-content-between gap-2">
                        <div class=" bg-primary-subtle rounded-2 p-2 ">
                            <div class=" d-flex align-items-center gap-2 mb-2">
                                <img src="../../assets/user.png" class=" w-25 h-25 rounded-circle border shadow" alt="">
                                <div>
                                    <span class=" d-block">Hi, user</span>
                                    <span>let get started</span>
                                </div>
                            </div>
                            <div class=" d-flex flex-column gap-1">
                                <button class=" form-control btn btn-primary btn-sm">Join now</button>
                                <button class=" form-control btn btn-light btn-sm border ">Log in</button>
                            </div>
                        </div>
                        <div class=" d-flex flex-column p-2 rounded-2 bg-danger text-white">
                            <span>Get US $10 off</span>
                            <span>with a new </span>
                            <span>supplier</span>
                        </div>
                        <div class=" d-flex flex-column p-2 rounded-2 bg-success text-white">
                            <span>Send quotes with</span>
                            <span>supplier</span>
                            <span>perferences</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-block d-lg-none">
                    <select name="" id="" class=" form-select">
                        <option value="" v-for="(menu,index) in topMenus">
                            <span :key="index">{{ menu.title }}</span>
                        </option>
                    </select>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>

const topMenus = reactive([
    { title: 'Automobiles' },
    { title: 'Clothes and wear' },
    { title: 'Home interiors' },
    { title: 'Computer and tech' },
    { title: 'tools, equipments' },
    { title: 'Sports and outdoor' },
    { title: 'Animal and pets' },
    { title: 'Mechinery tools' },
    { title: 'More category' }
]);


</script>

<style lang="scss" scoped>
.shop-img {
    background-image: url('../../assets/shop3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>