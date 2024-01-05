import { animate } from "popmotion"

export default () => {
    /**
     *
     * @param e
     */
    const underlineIn = (e) => {
        animate({
            from: 100,
            to: 0,
            duration: 300,
            onUpdate: latest => e.target.querySelector('span').style.transform = `translateX(-${latest}%)`
        })
    }

    /**
     *
     * @param e
     */
    const underlineOut = (e) => {
        animate({
            from: 0,
            to: 101,
            duration: 300,
            onUpdate: latest => e.target.querySelector('span').style.transform = `translateX(${latest}%)`
        })
    }

    return {
        underlineIn,
        underlineOut,
    }
}
