<template>
    <Carousel :wrap-around="true" :autoplay="8000" v-bind="settings">
        <Slide v-for="(slide, index) in slides" :key="index">
            <div class="carousel__item" :style="{ backgroundImage: 'url(' + slide.image + ')' }">
                <div class="overlay">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.caption }}</p>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1.5,
            snapAlign: 'start',
        },
        slides: [
            { image: '/images/slide_1.png', title: 'Title 1', caption: 'Caption 1', hover: false },
            { image: '/images/slide_2.png', title: 'Title 2', caption: 'Caption 2', hover: false },
            { image: '/images/slide_3.png', title: 'Title 3', caption: 'Caption 3', hover: false },
            { image: '/images/slide_4.png', title: 'Title 4', caption: 'Caption 4', hover: false },
        ]
    })
})
</script>
<style>
.carousel__item {
    height: 300px;
    width: 600px;
    margin-right: 50px;
    background-size: cover;
    background-position: center;
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(128, 128, 128, 0.7);
    /* Grey color */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.carousel__item:hover .overlay {
    opacity: 1;
}

.overlay h3 {
    margin-bottom: 10px;
}

.overlay p {
    margin: 0;
}
</style>