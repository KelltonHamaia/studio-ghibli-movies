<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/composables/useIsMobile'
import type { Movie } from '@/types/Movie'
const { movie } = defineProps<{ movie: Movie }>()
const { isMobile } = useIsMobile()
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <div
        class="rounded border-2 p-1 border-transparent hover:scale-105 hover:border-dashed hover:border-border lg:max-h-80"
      >
        <img
          class="rounded object-cover transition hover:cursor-pointer size-full"
          :src="movie.image"
          :alt="'Banner from the movie ' + movie.original_title"
        />
      </div>
    </SheetTrigger>
    <SheetContent
      class="min-w-lg"
      :side="isMobile ? 'bottom' : 'right'"
    >
      <SheetHeader class="space-y-4 *:p-4">
        <SheetTitle class="text-2xl">
          {{ movie.title }} {{ `(${movie.original_title_romanised})` }}
        </SheetTitle>
        <SheetDescription class="space-y-2">
          <img
            class="rounded object-cover"
            :src="movie.movie_banner"
            :alt="`A image from the movie ${movie.title}`"
          />
          <div class="text-pretty">
            <p>{{ movie.description }}</p>
            <p>
              This move was released in {{ movie.release_date }} and got a
              rating of {{ movie.rt_score }}.
            </p>
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
