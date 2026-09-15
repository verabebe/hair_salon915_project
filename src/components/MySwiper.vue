<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';


export default {
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {

            banners: [
                {
                    id: 1,
                    image: '/image0914/banner_hair01.jpg'
                },
                {
                    id: 2,
                    image: '/image0914/banner_hair02.jpg'
                },
                {
                    id: 3,
                    image: '/image0914/hair_styling_cream01.jpg'
                }
            ],

            modules: [Autoplay, Pagination, Navigation, EffectCube],
        }
    }

}

</script>

<template>
    <div class=" container-fluid px=0">
        <swiper class="my-swiper" :modules="modules" :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: true,
        }" :navigation="true" loop speed="3000" :effect="'cube'" :grabCursor="true" :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }" style="background-color: #3b141c;">
            <SwiperSlide v-for="banner in banners" :key="banner.id">
                <img :src="banner.image" class="d-block banner-img">
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.container-fluid {
    width: 100%;
    height: 350px;
}

.swiper {
    padding-top: 90px;
}

.swiper-slide {
    height: 350px;
}

.banner-img {
    width: 100%;
    height: 550px;
    object-fit: cover;
}
</style>