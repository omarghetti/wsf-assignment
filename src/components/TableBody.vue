<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type { Player } from "../models/player.types";
import axios from "axios";
import type { AxiosResponse } from "axios";
export default defineComponent({
  data() {
    return {
      players: [] as Player[],
      error: false,
    };
  },

  mounted() {
    axios
      .get("api/players")
      .then((response: AxiosResponse<Player>) => {
        this.players = [response.data];
        console.log(this.players);
      })
      .catch((err: any) => {
        console.log(err);
        this.error = true;
      });
  },
});
</script>

<template>
  <tbody>
    <tr v-for="(player, index) in players" :key="index">
      <td class="text-center">{{ player.id }}</td>
      <td class="text-center">{{ player.name }}</td>
      <td class="text-center">{{ player.position }}</td>
      <td class="text-center">{{ player.odds }}</td>
      <td class="text-center">{{ player.margin }}</td>
    </tr>
  </tbody>
</template>
