new Swiper(".swipper-review",{slidesPerView:1,spaceBetween:16,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination-r",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:20}},on:{init(){this.el.addEventListener("mouseenter",()=>{this.autoplay.stop()}),this.el.addEventListener("mouseleave",()=>{this.autoplay.start()})}}});
//# sourceMappingURL=index.e9054214.js.map