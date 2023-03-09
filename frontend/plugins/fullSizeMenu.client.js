import { ref, computed } from 'vue'

const isActive = ref(false)

export default () => {
    /**
     *
     * @returns {boolean}
     */
    const toggleState = () => isActive.value = !isActive.value

    /**
     *
     * @type {ComputedRef<boolean>}
     */
    const getState = computed(() => isActive.value)

    return {
        toggleState,
        getState
    }
}


