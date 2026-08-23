<script setup lang="ts">
import { getMovies } from '@/services/movies.service'
import { onMounted, ref } from 'vue'
import type { Movie } from './types/Movie'
import MovieGrid from './components/app/movies/MovieGrid.vue'

const movies = ref<Movie[]>([])

onMounted(async () => {
  movies.value = await getMovies()
})
</script>

<template>
  <div class="max-w-5xl mx-auto lg:min-h-screen p-4 lg:py-20">
    <h1 class="text-2xl md:text-5xl tracking-tighter font-bold">
      Studio Ghibli
    </h1>
    <p class="text-lg md:text-2xl">
      See all the masterpieces from Hayao Miyazaki below!
    </p>

    <MovieGrid />
  </div>
</template>
