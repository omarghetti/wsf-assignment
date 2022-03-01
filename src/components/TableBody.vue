<script lang="ts">
import axios, { AxiosResponse } from 'axios'
import type {Player} from '../models/player.types'
export default {
    data() {
        return{
            players: null,
            error: false
        }
    },
    mounted() {
        axios
        .get("http://localhost:8080/v1/players")
        .then((response: AxiosResponse<Player[]>) => {
            this.players = response
        })
        .catch((err: any)=>{
            this.error = true
            console.log(err)
        })
    }
};
</script>

<template>
    <tbody>
        
    </tbody>
</template>