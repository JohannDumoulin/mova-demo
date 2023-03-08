import { animate } from "popmotion"

export default () => {
    animate({
        from: 0,
        to: 100,
        onUpdate: latest => console.log(latest)
    })
}


