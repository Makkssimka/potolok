<template>
    <div class="gallery-wrapper">
        <h2>Галерея наших работ</h2>
        <div class="gallery-wp">
            <div class="gallery-block" :style="{ width: widthSlider,  transform: sliderTransform}"  @mousewheel="scrollGallery" v-hammer:swipe="swipeEvent">
                <div class="gallery-item" v-for="item in gallery" :key="item.id" :class="{'active-item': item.status}" v-hammer:tap="scaleItem">
                    <div v-if="item.design_id" class="design-wrapper">
                        <div class="design-image">
                            <img :src="`https://admin.профсервис.su${item.design.image}`" alt="">
                        </div>
                        <div class="design-description" v-if="item.design">
                            <div class="design-flag">дизайнер</div>
                            <div class="design-name">{{ item.design.name }}</div>
                            <a target="_blank" :href="item.design.url" class="design-link">{{ item.design.url_name }}</a>
                        </div>
                    </div>
                    <div class="img-item" :style="{ backgroundImage: `url(https://admin.профсервис.su${item.image})`}"></div>
                    <p class="name-item">{{ item.name }}</p>
                    <p class="desc-item">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap/all';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: function(){
        return{
            galleryList: null,
            galleryCount: 0,
            sliderTransform: 0,
            scale: false,
            design: null
        }
    },
    metaInfo: {
        title: 'Галерея выполненных нами работ',
        meta:[
                {name: 'description', content: 'Фотографии усатновленных нами натяжных потолков - Профсервис'}
        ]
    },
    mounted: function(){

        //Загрузка данных галлереи
        this.getGallery();

        gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
        gsap.to('.menu-wrapper', {zIndex: 0});
        gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
        gsap.from('.gallery-wrapper h2', {duration: 0.5, opacity: 0, y: -100});
        gsap.from('.gallery-wp', {duration: 0.5, opacity: 0, y: 100});
    },
    beforeRouteLeave(to, from, next) {
        gsap.to('.gallery-wrapper h2', {duration: 0.5, opacity: 0, y: -100});
        gsap.to('.gallery-wp', {duration: 0.5, opacity: 0, y: 100});
        gsap.to('.menu-wrapper', {zIndex: 800});
        setTimeout(next, 500);
    },
    computed: {
        ...mapGetters(['gallery', 'designs']),

        widthSlider: function(){
            let lengthSlider = this.gallery?this.gallery.length:15;
            return lengthSlider*100 + 'vw';
        }
    },
    methods: {
        ...mapActions(['getGallery']),

        swipeGallery: function(swipe){
            //Удаление увеличения
            let sc = document.querySelector('.img-scale');
            if(sc) sc.classList.remove('img-scale');

            let w = document.querySelector('.gallery-item').offsetWidth;
            if(swipe == 'left'){
                if(Math.abs(this.galleryCount) + 1 >= this.gallery.length) return;
                this.gallery[Math.abs(this.galleryCount)].status = false;
                this.galleryCount--;
            }
            else{
                if(Math.abs(this.galleryCount) - 1 < 0) return;
                this.gallery[Math.abs(this.galleryCount)].status = false;
                this.galleryCount++;
            }
            this.gallery[Math.abs(this.galleryCount)].status = true;
            this.sliderTransform = `translateX(${w*this.galleryCount}px)`;
        },
        scrollGallery: function(event){
            if(event.deltaY > 0){
                this.swipeGallery('left');
            }
            else{
                this.swipeGallery('right');
            }
        },
        swipeEvent: function(event){
            if(event.deltaX < 0){
                this.swipeGallery('left');
            }
            else{
                this.swipeGallery('right');
            }
        },
        scaleItem: function(event){
            let img = event.target.parentElement.querySelector('.img-item');
            img.classList.toggle('img-scale');
        }
    }
}
</script>