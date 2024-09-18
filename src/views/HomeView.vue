<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="top">
    Welcome to McKednree Interactions
  </div>
  <br>
  <div class="bottom">
  <nav>
    <RouterLink :to="{ name: 'about'}">about</RouterLink>
    <RouterLink :to="{ name: 'login'}">login</RouterLink>
    <RouterLink :to="{ name: 'create'}" class="variablelink">Begin new project</RouterLink>
    <RouterLink :to="{ name: 'history'}" class="variablelink">View project history</RouterLink>
  </nav>
</div>
</template>

<style>
top {
  justify-self: center;
  justify-content: cetner;
}

bottom {
  justify-self: cetner;
  justify-content: center;
}
</style>
