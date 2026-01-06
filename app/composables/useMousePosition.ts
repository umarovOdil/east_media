export const useMousePosition = () => {
    const x = ref(0)
    const y = ref(0)

    const update = (event: MouseEvent) => {
        x.value = (event.clientX / window.innerWidth) * 2 - 1
        y.value = -(event.clientY / window.innerHeight) * 2 + 1
    }

    onMounted(() => {
        if (import.meta.client) {
            window.addEventListener('mousemove', update)
        }
    })

    onUnmounted(() => {
        if (import.meta.client) {
            window.removeEventListener('mousemove', update)
        }
    })

    return { x, y }
}
