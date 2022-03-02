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
      .then((response: AxiosResponse<Player[]>) => {
        this.players = response.data;
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
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      v-for="(player, index) in players"
      :key="index"
    >
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {{ player.id }}
      </td>
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {{ player.name }}
      </td>
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {{ player.position }}
      </td>
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {{ player.odds }}
      </td>
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        {{ player.margin }}
      </td>
      <td
        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
      >
        <a href="/edit">Edit Margin</a>
      </td>
    </tr>
  </tbody>
</template>
