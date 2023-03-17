import lax from 'lax.js'

export default () => {
    window.onload = () => {
        window.lax = { presets: lax.presets }
        lax.init()

        lax.addDriver('scrollY', () => {
            return window.scrollY
        })

        lax.addElements(
            '.lax-fade-y',  // Element selector rule
            {             // Animation data
                scrollY: {
                    translateY: [
                        [0, 700],
                        [0, 100]
                    ]
                }
            },
            {
                style: {}   // Element options
            }
        )

        lax.addElements(
            '.lax-about-us',  // Element selector rule
            {             // Animation data
                scrollY: {
                    translateY: [
                        [700, 2000],
                        [-50, 50]
                    ]
                }
            },
            {
                style: {}   // Element options
            }
        )
    }
}


