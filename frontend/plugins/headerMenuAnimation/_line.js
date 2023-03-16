import { animate, easeOut } from 'popmotion'

export default () => {
    /**
     *
     */
    const lineIn = () => {
        const line = document.querySelector('.js-header__fullSizeMenu-line')

        animate({
            from: 100,
            to: 0,
            duration: 1000,
            elapsed: -200,
            ease: easeOut,
            onUpdate: latest => line.style.transform = `translateY(${latest}%)`,
        })
    }

    /**
     *
     */
    const lineOut = () => {
        const line = document.querySelector('.js-header__fullSizeMenu-line')

        animate({
            from: 0,
            to: 100,
            duration: 1000,
            elapsed: -300,
            ease: easeOut,
            onUpdate: latest => line.style.transform = `translateY(${latest}%)`
        })
    }

    return {
        lineIn,
        lineOut,
    }
}
