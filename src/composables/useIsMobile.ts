import { ref, onMounted, onUnmounted } from 'vue'

export const useIsMobile = () => {
  const isMobile = ref(false)
  let media: MediaQueryList

  const update = () => {
    isMobile.value = media.matches
  }

  onMounted(() => {
    media = window.matchMedia('(max-width: 768px)')
    update()
    media.addEventListener('change', update)
  })

  onUnmounted(() => {
    media.removeEventListener('change', update)
  })

  return {
    isMobile,
  }
}
