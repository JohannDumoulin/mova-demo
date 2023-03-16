import useMenuFade from './headerMenuAnimation/_menuFade'
import useClipPath from './headerMenuAnimation/_clipPath'
import useClose from './headerMenuAnimation/_close'
import useImgScale from './headerMenuAnimation/_imgScale'

const { menuFadeOut, menuFadeIn } = useMenuFade()
const { clipPathIn, clipPathOut } = useClipPath()
const { closeIn, closeOut } = useClose()
const { imgScaleIn } = useImgScale()

// const lineIn = () => {
//     // const img = document.querySelector('.header__fullSizeMenu-img')
//
//     const test = animate({
//         from: 1.3,
//         to: 1,
//         duration: 1000,
//         elapsed: -200,
//         ease: easeOut,
//         onUpdate: latest => console.log(latest),
//     })
// }
//
// const lineOut = () => {
//     const img = document.querySelector('.header__fullSizeMenu-img')
//
//     animate({
//         from: 1.3,
//         to: 1,
//         duration: 1000,
//         elapsed: -200,
//         ease: easeOut,
//         onUpdate: latest => img.style.transform = `scale(${latest})`,
//     })
// }

export default () => {
    /**
     *
     */
    const openAnimation = async () => {
        await menuFadeOut()
        clipPathIn()
        closeIn()
        imgScaleIn()
        // await clipPathOut()
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
