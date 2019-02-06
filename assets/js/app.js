const reviews = new Vue({
    el: '.reviews',
    data: {
        bgImage: 'assets/img/bg-5.jpg',
        title: 'What Our  Tourist Say',
        reviews: []
    },
    components: {
        review: {
            props: ['name', 'excerpt', 'image'],
            template: `<div class="reviews__item">`
                           + `<img :src='image'>`
                           + `<div class="reviews__content">`
                                + `<span>{{name}}</span>`
                                + `<p>{{excerpt}}</p>`
                           + `</div>`
                        + `</div>`
        }
    },
    mounted() {
        axios
            .get('assets/data/reviews.json')
            .then(response => {
                this.reviews = response.data;
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }
});

 /* Slick slider */
(function ($) {
    $(document).ready(function () {
        $('#slider').slick({
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });
})(jQuery);
