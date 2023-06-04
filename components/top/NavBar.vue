<template>
  <div class="border bg-white fixed-top">
    <nav
      class="container d-flex flex-column flex-lg-row gap-2 justify-content-between align-items-center p-2"
    >
      <div class="col-12 col-lg-2">
        <NuxtLink to="/" class=" nav-link">
          <span class="d-flex align-items-center">
            <div class="bg-primary p-1 rounded-2 me-2">
              <IconsIcTwotoneShoppingBag class="text-white-50 mb-0 h3 shadow" />
            </div>
            <span class="fw-bolder text-primary mb-0 h2 opacity-50">Brand</span>
          </span>
        </NuxtLink>
      </div>
      <div class="col-12 col-lg-7">
        <div class="input-group">
          <input
            class="form-control rounded-end-0 w-25 border border-2 border-primary"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <select
            name=""
            id=""
            class="form-select rounded-0 border border-primary border-2"
          >
            <option value="">All Category</option>
            <option value="">Category One</option>
            <option value="">Category Two</option>
            <option value="">Category Three</option>
          </select>
          <button class="btn btn-primary">Search</button>
        </div>
      </div>
      <div class="col-12 col-lg-3 d-none d-lg-block">
        <ul
          class="list-unstyled d-flex justify-content-end align-items-center gap-3 mb-0 text-black-50"
        >
          <li
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <IconsMaterialSymbolsPerson class="h3 mb-0" />
            <span class="small">Profile</span>
          </li>
          <li
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <IconsMaterialSymbolsChatBubble class="h4 mb-0" />
            <span class="small">Message</span>
          </li>
          <li
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <IconsMaterialSymbolsFavorite class="h4 mb-0" />
            <span class="small">Orders</span>
          </li>
          <li
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <IconsMaterialSymbolsShoppingCartRounded class="h4 mb-0" />
            <span class="small">My cart</span>
          </li>
        </ul>
      </div>
    </nav>
    <TopNavBarMenus />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
