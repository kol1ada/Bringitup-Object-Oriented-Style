import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.showSlides = this.slides.length
        }

        try {
            this.hanson.style.display = 'none'
            if (n == 3) {
                setTimeout(() => {
                    this.hanson.style.display = 'block'
                    this.hanson.classList.add('animated', 'fadeInUp')
                }, 3000)
            }
        } catch (e) { }

        this.slides.forEach(slide => slide.style.display = 'none')
        this.slides[this.slideIndex - 1].style.display = 'block'
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn')
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) { }

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1)
            })

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault()
                this.slideIndex = 1
                this.showSlides(this.slideIndex)
            })
        })
        this.showSlides(this.slideIndex)
    }
}