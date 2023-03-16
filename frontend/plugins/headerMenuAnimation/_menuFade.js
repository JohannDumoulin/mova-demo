import { animate, } from 'popmotion'

export default () => {
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
        return new Promise((resolve, reject) => {
            const headerMenus = document.querySelectorAll('.header__headerMenu')

            headerMenus.forEach(menu => menu.classList.add('pointer-events-none'))

            animate({
                from: 1,
                to: 0,
                duration: 500,
                onUpdate: latest => headerMenus.forEach(menu => menu.style.opacity = latest),
                onComplete: resolve
            })
        });
    }

    return {
        menuFadeIn,
        menuFadeOut,
    }
}
