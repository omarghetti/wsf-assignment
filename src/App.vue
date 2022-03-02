<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeadBar from "./components/HeadBar.vue";
</script>

<template>
  <main>
    <HeadBar />
  </main>
  <RouterView />
</template>
