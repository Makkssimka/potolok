<template>
    <div class="content-page-wrapper service-wrapper">
        <div class="empty-block content-block"></div>
        <div class="white-block content-block">
            <h2>Стоимость натяжных потолков</h2>
            <span class="lnr lnr-cross close-btn" @click="goBack"></span>
            <div class="list-services">
                <router-link :to="'/potolok/' + item.slug" class="item-service" v-for="item in services" :key="item.id">
                    <div class="service-image" :style="{ backgroundImage: 'url(https://admin.профсервис.su/'+item.image+')' }"></div>
                    <p class="header-service">{{ item.title }}</p>
                    <p class="desc-service">от {{ item.price }} руб. кв.м.</p>
                </router-link>
            </div>
        </div>
        <div class="empty-block content-block"></div>
    </div>
</template>

<script>
    import gsap from 'gsap/all';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        metaInfo: {
            title: 'Стоимость натяжных потолков',
            meta: [
                {name: 'description', content: 'Стоимость натяжных потолоков с установкой - Профсервис'}
            ]
        },
        mounted: function(){

            if(!this.services) this.getServices();

            gsap.from('.service-wrapper h2', {ease: "power3.out", duration: 0.5, opacity: 0, y: -100});
            gsap.from('.close-btn', {duration: 0.3, opacity: 0});
            gsap.from('.item-service', {ease: "power3.out", stagger: 0.15, duration: 0.5, delay: 0.2, y: 100, opacity: 0});
            gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
            gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
            gsap.to('.menu-wrapper', {duration: 0.3, backgroundColor: '#fff'});
        },
        beforeRouteLeave(to, from, next) {
            gsap.to('.service-wrapper h2', {ease: "power3.out", delay: 0.2, duration: 0.3, opacity: 0, y: 100});
            gsap.to('.close-btn', {duration: 0.3, opacity: 0});
            gsap.to('.item-service', {ease: "power3.out", duration: 0.2, y: 100, opacity: 0});
            gsap.to('.menu-wrapper', {duration: 0.3, backgroundColor: '#ffffff00'});
            setTimeout(next, 500)
        },
        methods: {
            ...mapActions(['getServices']),
            goBack: function(){
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
            }
        },
        computed: {
            ...mapGetters(['services'])
        }
    }
</script>