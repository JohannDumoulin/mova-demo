import { animate, easeOut } from 'popmotion'

export default () => {
    /**
     *
     */
    const appearIn = () => {
        const itemList = document.querySelectorAll('.js-appear')

        animate({
            from: 100,
            to: 0,
            duration: 700,
            elapsed: -500,
            ease: easeOut,
            onUpdate: latest => itemList.forEach(item => item.style.transform = `translateY(${latest}px)`),
        })

        animate({
            from: 0,
            to: 1,
            duration: 700,
            elapsed: -500,
            onUpdate: latest => itemList.forEach(item => item.style.opacity = latest),
        })
    }

    /**
     *
     */
    const appearOut = () => {
        const itemList = document.querySelectorAll('.js-appear')

        animate({
            from: 0,
            to: 100,
            duration: 700,
            elapsed: -100,
            ease: easeOut,
            onUpdate: latest => itemList.forEach(item => item.style.transform = `translateY(${latest}px)`),
        })

        animate({
            from: 1,
            to: 0,
            duration: 500,
            elapsed: -100,
            onUpdate: latest => itemList.forEach(item => item.style.opacity = latest),
        })
    }

    return {
        appearIn,
        appearOut,
    }
}
