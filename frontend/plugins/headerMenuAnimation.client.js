import { animate, easeInOut } from 'popmotion'

/**
 *
 */
const menuFadeIn = () => {
    const headerMenus = document.querySelectorAll('.header__headerMenu')

    animate({
        from: 0,
        to: 1,
        duration: 500,
        elapsed: -300,
        onUpdate: latest => headerMenus.forEach(menu => menu.style.opacity = latest),
        onComplete: () => headerMenus.forEach(menu => menu.classList.remove('pointer-events-none'))
    })
}

/**
 *
 */
const menuFadeOut = () => {
    const headerMenus = document.querySelectorAll('.header__headerMenu')

    headerMenus.forEach(menu => menu.classList.add('pointer-events-none'))

    animate({
        from: 1,
        to: 0,
        duration: 500,
        onUpdate: latest => headerMenus.forEach(menu => menu.style.opacity = latest),
        onComplete: clipPathIn
    })
}

/**
 *
 */
const clipPathIn = () => {
    const fullSizeMenu = document.querySelector('.header__fullSizeMenu')
    const mask = document.querySelector('.header__fullSizeMenu-mask')
    const maskReverse = document.querySelector('.header__fullSizeMenu-maskReverse')

    fullSizeMenu.classList.remove('opacity-0')
    fullSizeMenu.classList.remove('pointer-events-none')

    animate({
        from: 100,
        to: 0,
        duration: 700,
        ease: easeInOut,
        onPlay: closeIn,
        onUpdate: latest => {
            mask.style.clipPath = `inset(0% 0% ${latest}%)`
            maskReverse.style.clipPath = `inset(${latest}% 0% 0%)`
        },
        // onComplete: clipPathIn
    })
}

/**
 *
 */
const clipPathOut = () => {
    const fullSizeMenu = document.querySelector('.header__fullSizeMenu')
    const mask = document.querySelector('.header__fullSizeMenu-mask')
    const maskReverse = document.querySelector('.header__fullSizeMenu-maskReverse')

    animate({
        from: 0,
        to: 100,
        duration: 700,
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
        // onComplete: clipPathIn
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

export default () => {
    /**
     *
     */
    const openAnimation = () => {
        menuFadeOut()
    }

    /**
     *
     */
    const closeAnimation = () => {
        closeOut()
        clipPathOut()
        menuFadeIn()
    }

    return {
        openAnimation,
        closeAnimation,
    }
}
