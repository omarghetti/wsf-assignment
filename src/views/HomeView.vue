<script setup lang="ts">
import HeadBar from "../components/HeadBar.vue";
import TableWrapper from "../components/TableWrapper.vue";
import TableHead from "../components/TableHead.vue";
import TableBody from "../components/TableBody.vue";
</script>

<template>
  <div class="container mx-auto mt-20 rounded-t-lg">
    <TableWrapper>
      <TableHead />
      <TableBody />
    </TableWrapper>
  </div>
</template>
