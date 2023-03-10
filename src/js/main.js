import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ btns: '.next', container: '.page' });
    slider.render()

    const modulePageSlider = new MainSlider({ btns: '.next', container: '.moduleapp' });
    modulePageSlider.render();

    const ShowUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true,
    })
    ShowUpSlider.init()

    const Modules = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-prev',
        prev: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    Modules.init()

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-prev',
        prev: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    })
    feedSlider.init()

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init()

    new Difference('.officerold', '.officernew', '.officer__card-item').init()
    new Forms('.forms').init()

})