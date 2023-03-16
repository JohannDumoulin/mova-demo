import useMenuFade from './headerMenuAnimation/_menuFade'
import useClipPath from './headerMenuAnimation/_clipPath'
import useClose from './headerMenuAnimation/_close'
import useImgScale from './headerMenuAnimation/_imgScale'
import useLine from './headerMenuAnimation/_line'
import useAppear from './headerMenuAnimation/_appear'
import useAppearChained from './headerMenuAnimation/_appearChained'

const { menuFadeOut, menuFadeIn } = useMenuFade()
const { clipPathIn, clipPathOut } = useClipPath()
const { closeIn, closeOut } = useClose()
const { imgScaleIn } = useImgScale()
const { lineIn, lineOut } = useLine()
const { appearIn, appearOut } = useAppear()
const { appearChainedIn, appearChainedOut } = useAppearChained()



export default () => {
    /**
     *
     */
    const openAnimation = async () => {
        await menuFadeOut()
        clipPathIn()
        closeIn()
        imgScaleIn()
        lineIn()
        appearIn()
        appearChainedIn()
    }

    /**
     *
     */
    const closeAnimation = () => {
        closeOut()
        clipPathOut()
        menuFadeIn()
        lineOut()
        appearOut()
        appearChainedOut()
    }

    return {
        openAnimation,
        closeAnimation,
    }
}
