import { animate } from 'popmotion'

export default () => {
    /**
     *
     */
    const closeIn = () => {
        const closeMenu = document.querySelector('.header__fullSizeMenu-close')

        closeMenu.classList.remove('pointer-events-none')

        animate({
            from: 0,
            to: 1,
            duration: 500,
            elapsed: -300,
            onUpdate: latest => closeMenu.style.opacity = latest,
        })
    }

    /**
     *
     */
    const closeOut = () => {
        const closeMenu = document.querySelector('.header__fullSizeMenu-close')

        closeMenu.classList.remove('pointer-events-none')

        animate({
            from: 1,
            to: 0,
            duration: 500,
            elapsed: -300,
            onUpdate: latest => closeMenu.style.opacity = latest,
        })
    }

    return {
        closeIn,
        closeOut,
    }
}
