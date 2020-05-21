<template>
    <div class="menu-page-wrapper">
        <div class="menu-list">
            <router-link to="/" class="item-route">Главная</router-link>
            <router-link to="/services" class="item-route">Цены</router-link>
            <router-link to="/contact" class="item-route">Контакты</router-link>
            <router-link to="/gallery" class="item-route">Галерея</router-link>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap/all';

export default {
    metaInfo: {
        title: 'Меню',
        meta:[
                {name: 'description', content: 'Меню - Профсервис'}
        ]
    },
    mounted: function(){
        this.$store.dispatch('menuChange');
        gsap.from('.menu-page-wrapper', {duration: 0.3, opacity: 0});
        gsap.from('.item-route', {ease: "power3.inOut", stagger: 0.2, delay: 0.3, y:"-50", opacity: 0});
        gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
        gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
    },
    beforeRouteLeave(to, from, next) {
        this.$store.dispatch('menuChange');
        gsap.to('.item-route', {ease: "expo.in", duration: 0.1, stagger: 0.1, y:"-100", opacity: 0});
        gsap.to('.menu-page-wrapper', {duration: 0.3, delay: 0.4, opacity: 0});
        setTimeout(next, 700);
    },
}
</script>