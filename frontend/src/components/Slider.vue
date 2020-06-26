<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="slide in slides" class="swiper-slide">
                    <img :src="getImageUrl(slide.image)" :alt="slide.name">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <img class="slider__logo" src="../assets/logo-rosieres.png" alt="Logo Rosières">
    </div>
</template>

<script>
    import Swiper from "swiper";

    export default {
        name: "Slider",
        props: {},
        data() {
            return {
                swiper: null,
                slides: [
                    {
                        name: 'Slide 1',
                        image: 'slide-1',
                    },
                    {
                        name: 'Slide 2',
                        image: 'slide-2',
                    },
                    {
                        name: 'Slide 3',
                        image: 'slide-3',
                    },
                ],
            };
        },
        computed: {},
        methods: {
            getImageUrl(img) {
                return require(`../assets/slides/${img}.jpg`);
            }
        },
        mounted() {
            this.swiper = new Swiper('.swiper-container', {
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false,
                },
                loop: true,
                speed: 500,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });
        },
    };
</script>

<style scoped lang="scss">
    .slider {
        position: relative;
        height: 300px;
        margin-bottom: 35px;
        .swiper-container {
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .slider__logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            height: auto;
            z-index: 5;
            user-select: none;
        }
    }
</style>
