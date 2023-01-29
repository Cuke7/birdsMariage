<template>
    <div class="flex flex-col p-8 h-screen w-full bg-[#0a240c] overflow-auto gap-4">
        <div class="text-5xl text-amber-300 font-mono">{{ bird.name }}</div>
        <div class="text-2xl text-white font-mono">{{ bird.latinName }}</div>
        <div>
            <div class="flex gap-4 overflow-x-auto">
                <img v-for="image in bird.images" :src="image.hdLink" class="rounded-box h-[200px] my-auto" />
            </div>
        </div>

        <p v-for="p in bird.box_comportement" class="text-white">
            {{ p }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { birds } from "../birds";
const route = useRoute();
const birdId = Number(route.params.id);
const bird = birds[birdId];
</script>
