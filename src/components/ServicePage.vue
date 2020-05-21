<template>
    <div class="content-page-wrapper" v-if="services">
        <div class="poiner-wrapper">
            <span class="lnr lnr-pointer-up"></span>
        </div>
        <div class="black-bg"></div>
        <div class="bg-top" :style="{backgroundImage: `url(${imageBg})`}"></div>
        <div class="empty-block content-block"></div>
        <div class="white-block content-block" v-hammer:swipe.up="swipeUp">
            <h1>{{ title }}</h1>
            <h2>с виртуальной проекцией</h2>
            <div class="image-content-wrapper">
                <img src="/images/glass2.png" alt="">
            </div>    
        </div>
        <div class="black-block content-block" v-hammer:swipe.down="swipeDown">
            <div class="black-wrapper">
                <p class="head-answer">Что такое {{ title }}?</p>
                <p class="content-answer">{{ description }}</p>
                <div class="btn-block">
                    <p class="price">от {{ price }} руб. кв.м.</p>
                    <router-link :to="'/form/'+slug" class="btn btn-white-empty more">Узнать подробности</router-link>
                </div>
                <div class="number-block">{{ position }} / {{ len }}</div>
                <div class="arrow-block">
                    <router-link v-if="prevSlug" :to="'/potolok/'+prevSlug"><span class="lnr lnr-chevron-left"></span></router-link>
                    <router-link v-if="nextSlug" :to="'/potolok/'+nextSlug"><span class="lnr lnr-chevron-right"></span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap/all';
    import { mapGetters, mapActions } from 'vuex';

    export default {

        data: function(){
            return {
                title: null,
                description: null,
                price: null,
                position: null,
                len: null,
                slug: null,
                bg: null,
                nextSlug: null,
                prevSlug: null
            }
        },

        metaInfo: function() {
            return {
                title: `${this.title} от компании Профсервис`,
                meta:[
                    {name: 'description', content: `${this.title} - ${this.description}`}
                    ]
            }
        },

        mounted: function(){
            if(!this.services){
                this.getServices();
            }
            else{
                this.updateService(this.services);
            }
        },

        beforeRouteEnter (to, from, next) {
            next(() => {
                gsap.to('.service-button-wrapper', {duration: 0.3, opacity: 1, left: 0});
                gsap.to('.call-wrapper', {duration: 0.5, y: 0, opacity: 1});

                if(from.name == 'services'){
                    gsap.from('.white-block h1, .white-block h2', {duration: 0.5, opacity: 0, y: -100});
                    gsap.from('.image-content-wrapper, .bg-top', {duration: 0.5, delay: 0.1, opacity: 0, x: 200});
                    gsap.from('.black-block', {duration: 0.4, delay: 0.2, opacity: 0, x: 200});
                }
                else{
                    gsap.from('.white-block h1, .white-block h2', {duration: 0.5, opacity: 0, y: -100});
                    gsap.from('.image-content-wrapper', {duration: 0.4, opacity: 0, y: 100});
                    gsap.from('.bg-top', {duration: 0.4, opacity: 0, y: -100});
                    gsap.from('.black-block', {duration: 0.4, delay: 0.2, opacity: 0, x: 100}); 
                }

                 if (typeof window.orientation !== 'undefined') { 
                    gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
                 }
                 else{
                    gsap.to('.line-button', {duration: 0.3, backgroundColor: '#fff'});
                 }
                 gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
            })
        }, 
        beforeRouteLeave(to, from, next) {
            if(to.name == 'services'){
                gsap.to('.white-block h1, .white-block h2', {duration: 0.3, delay: 0.2, opacity: 0, y: -100});
                gsap.to('.image-content-wrapper, .bg-top', {duration: 0.3, delay: 0.1, opacity: 0, x: 200});
                gsap.to('.black-block', {duration: 0.3, opacity: 0, x: 200});
            }
            else{
                gsap.to('.white-block h1, .white-block h2', {duration: 0.3, delay: 0.2, opacity: 0, y: -100});
                gsap.to('.image-content-wrapper', {duration: 0.3, delay: 0.1, opacity: 0, y: 100});
                gsap.to('.bg-top', {duration: 0.3, delay: 0.1, opacity: 0, y: -100});
                gsap.to('.black-block', {duration: 0.3, opacity: 0, x: 100});
            }

            gsap.to('.service-button-wrapper', {duration: 0.3, opacity: 0, left: "-70px"});
            gsap.to('.call-wrapper', {duration: 0.5, y: 60, opacity: 0});
            document.querySelector('.call-wrapper').classList.remove('call-active');

            setTimeout(next, 500);
        },
        beforeRouteUpdate (to, from, next) {
            gsap.to('.white-block h1, .white-block h2', {duration: 0.4, opacity: 0, x: -100});
            gsap.to('.head-answer, .content-answer, .btn-block', {duration: 0.4, opacity: 0, y: -100});
            gsap.to('.bg-top', {duration: 0.4, opacity: 0, y: -100});
            setTimeout(next, 400);
        }, 
        watch: {
            $route: function(){
                gsap.fromTo('.white-block h1, .white-block h2', {opacity: 0, x: 100},{duration: 0.4, opacity: 1, x: 0});
                gsap.fromTo('.head-answer, .content-answer, .btn-block', {opacity: 0, y: 100}, {duration: 0.4, opacity: 1, y: 0});
                gsap.to('.bg-top', {duration: 0.4, opacity: 1, y: 0});
                this.updateService(this.services);
            },
            services: function(serv){
                this.updateService(serv);
            }
        },
        methods: {
            ...mapActions(['getServices']),
            updateService: function(serv){
                let slug = this.$route.params.slug;
                let index = serv.findIndex(service => service.slug == slug);
                let item = serv[index];
                this.title = item.title;
                this.description = item.description;
                this.price = item.price;
                this.slug = item.slug;
                this.bg = item.background;
                this.position = index + 1;
                this.len = serv.length;
                this.nextSlug = serv[index+1]?serv[index+1].slug:null;
                this.prevSlug = serv[index-1]?serv[index-1].slug:null;
            },
            swipeUp: function(){
                gsap.to('.black-block', {duration: 0.5, top: 0});
                gsap.to('.line-button', {duration: 0.3, backgroundColor: '#fff'});
                gsap.to('.menu-back-button', {duration: 0.3, color: '#fff'});
                gsap.to('.service-button-wrapper', {duration: 0.3, left: '-100px'});
                gsap.to('.poiner-wrapper', {duration: 0.3, bottom: '-100px'});
                gsap.to('.call-wrapper', {duration: 0.3, delay: 0.3, y: 100, opacity: 0});
                document.querySelector('.call-wrapper').classList.remove('call-active');
            },
            swipeDown: function(){
                gsap.to('.black-block', {duration: 0.5, top: '100%'});
                gsap.to('.line-button', {duration: 0.1, backgroundColor: '#000'});
                gsap.to('.menu-back-button', {duration: 0.1, color: '#000'});
                gsap.to('.service-button-wrapper', {duration: 0.3, left: '0'});
                gsap.to('.poiner-wrapper', {duration: 0.3, bottom: '10px'});
                gsap.to('.call-wrapper', {duration: 0.3, delay: 0.3, y: 0, opacity: 1});
            }
        },
        computed: {
            ...mapGetters(['services']),
            imageBg: function(){
                return this.bg?`https://admin.профсервис.su${this.bg}`:'/images/6.png';
            }
        }
    }
</script>