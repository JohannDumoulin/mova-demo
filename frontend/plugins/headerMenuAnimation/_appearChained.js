import { animate, easeOut } from 'popmotion'

export default () => {
    /**
     *
     */
    const appearChainedIn = () => {
        const containerList = document.querySelectorAll('.js-appearChainedContainer')

        containerList.forEach(list => {
            const itemList = list.querySelectorAll('.js-appearChained')

            itemList.forEach((item, index) => {
                animate({
                    from: 150,
                    to: 0,
                    duration: 700,
                    elapsed: -300 - (index * 75),
                    ease: easeOut,
                    onUpdate: latest => item.style.transform = `translateY(${latest}px)`
                })

                animate({
                    from: 0,
                    to: 1,
                    duration: 700,
                    elapsed: -300 - (index * 75),
                    onUpdate: latest => item.style.opacity = latest
                })
            })
        })
    }

    /**
     *
     */
    const appearChainedOut = () => {
        const containerList = document.querySelectorAll('.js-appearChainedContainer')

        containerList.forEach(list => {
            const itemList = list.querySelectorAll('.js-appearChained')

            itemList.forEach((item, index) => {
                animate({
                    from: 0,
                    to: 150,
                    duration: 700,
                    elapsed: - index * 75,
                    ease: easeOut,
                    onUpdate: latest => item.style.transform = `translateY(${latest}px)`
                })

                animate({
                    from: 1,
                    to: 0,
                    duration: 700,
                    elapsed: - index * 75,
                    onUpdate: latest => item.style.opacity = latest
                })
            })
        })
    }

    return {
        appearChainedIn,
        appearChainedOut,
    }
}
