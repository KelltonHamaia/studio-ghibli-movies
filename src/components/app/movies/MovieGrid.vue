<script setup lang="ts">
import Card from '@/components/app/movies/Card.vue'
import { useIsMobile } from '@/composables/useIsMobile'
import { getMovies } from '@/services/movies.service'
import { useQuery } from '@tanstack/vue-query'

const { data: movies, isPending } = useQuery({
  queryKey: ['movies'],
  queryFn: getMovies,
})

const { isMobile } = useIsMobile()
const placeholder = isMobile
  ? Array.from({ length: 8 })
  : Array.from({ length: 12 })
</script>
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-4 lg:py-20"
  >
    <div
      v-if="isPending"
      v-for="(_, key) in placeholder"
      :key="key"
      class="h-80 bg-secondary animate-pulse"
    ></div>
    <Card
      v-else
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
    />
  </div>
</template>
