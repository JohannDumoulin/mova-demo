import { ref, computed } from 'vue'
import useHeaderMenuAnimation from '/plugins/headerMenuAnimation.client'

const { openAnimation, closeAnimation } = useHeaderMenuAnimation()

const isActive = ref(false)

export default () => {
    /**
     *
     * @returns {boolean}
     */
    const toggleState = () => {
        isActive.value = !isActive.value

        if (isActive.value) openAnimation()

        if (!isActive.value) closeAnimation()
    }

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


