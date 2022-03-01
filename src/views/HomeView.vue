<script setup lang="ts">
import HeadBar from "../components/HeadBar.vue";
import TableWrapper from "../components/TableWrapper.vue";
import TableHead from "../components/TableHead.vue";
</script>

<template>
  <main>
    <HeadBar />
  </main>
  <div class="container mx-auto mt-20">
    <TableWrapper>
      <TableHead />
      <TableBody />
    </TableWrapper>
  </div>
</template>
