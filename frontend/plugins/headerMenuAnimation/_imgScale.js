import { animate, easeOut } from 'popmotion'

export default () => {
    /**
     *
     */
    const imgScaleIn = () => {
        const img = document.querySelector('.header__fullSizeMenu-img')

        animate({
            from: 1.3,
            to: 1,
            duration: 1000,
            elapsed: -200,
            ease: easeOut,
            onUpdate: latest => img.style.transform = `scale(${latest})`,
        })
    }

    return {
        imgScaleIn,
    }
}
