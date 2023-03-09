export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(btns);
        this.slides = this.page.children;
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.showSlides = this.slides.length
        }

        this.slides.forEach(slide => slide.style.display = 'none')
        this.slides[this.slideIndex - 1].style.display = 'block'
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn')
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    render() {
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