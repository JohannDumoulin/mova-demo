import { animate, easeInOut } from 'popmotion'

export default () => {
    /**
     *
     */
    const clipPathIn = () => {
        const fullSizeMenu = document.querySelector('.js-header__fullSizeMenu')
        const mask = document.querySelector('.header__fullSizeMenu-mask')
        const maskReverse = document.querySelector('.header__fullSizeMenu-maskReverse')

        fullSizeMenu.classList.remove('opacity-0')
        fullSizeMenu.classList.remove('pointer-events-none')

        animate({
            from: 100,
            to: 0,
            duration: 700,
            ease: easeInOut,
            onUpdate: latest => {
                mask.style.clipPath = `inset(0% 0% ${latest}%)`
                maskReverse.style.clipPath = `inset(${latest}% 0% 0%)`
            },
        })
    }

    /**
     *
     */
    const clipPathOut = () => {
        const fullSizeMenu = document.querySelector('.js-header__fullSizeMenu')
        const mask = document.querySelector('.header__fullSizeMenu-mask')
        const maskReverse = document.querySelector('.header__fullSizeMenu-maskReverse')

        animate({
            from: 0,
            to: 100,
            duration: 700,
            elapsed: -400,
            ease: easeInOut,
            onUpdate: latest => {
                mask.style.clipPath = `inset(0% 0% ${latest}%)`
                maskReverse.style.clipPath = `inset(${latest}% 0% 0%)`
            },
            onComplete: () => {
                fullSizeMenu.classList.add('opacity-0')
                fullSizeMenu.classList.add('pointer-events-none')
            }
        })
    }

    return {
        clipPathIn,
        clipPathOut,
    }
}
