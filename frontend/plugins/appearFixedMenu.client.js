export default () => {
    const appearFixedMenu = () => {
        const header = document.querySelector('.js-header');
        const fixedMenu = document.querySelector('.js-fixedMenu');

        const handleIntersection = entries => {
            entries.map((entry) => {
                // console.log(entry.isIntersecting);
                if (entry.isIntersecting) {
                    fixedMenu.style.transform = 'translateY(-200%)'

                    return
                }

                fixedMenu.style.transform = 'translateY(0)'
            });
        }

        const observer = new IntersectionObserver(handleIntersection);

        observer.observe(header);
    }

    appearFixedMenu()
}


