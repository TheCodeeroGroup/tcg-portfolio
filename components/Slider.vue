<template>
    <Carousel :wrap-around="true" :autoplay="8000" v-bind="settings" >
        <Slide v-for="slide in 4" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
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
        // carousel settings
        settings: {
            itemsToShow: 1.5,
            snapAlign: 'start',
        },

    })
})
</script>
<style>
.carousel__item {
    height: 300px;
    background-color: red;
    width: 600px;
    margin-right: 50px;
}
</style>