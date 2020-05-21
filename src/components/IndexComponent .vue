<template>
    <div class="content-page-wrapper">
        <div class="poiner-wrapper">
            <span class="lnr lnr-pointer-up"></span>
        </div>
        <div class="black-bg"></div>
        <div class="bg-top"></div>
        <div class="empty-block content-block"></div>
        <div class="white-block content-block" v-hammer:swipe.up="swipeUp">
            <h1>Гипсотяжные потолки</h1>
            <h2>с виртуальной проекцией</h2>
            <div class="image-content-wrapper">
                <img src="/images/glass2.png" alt="">
            </div>    
        </div>
        <div class="black-block content-block" v-hammer:swipe.down="swipeDown">
            <div class="black-wrapper">
                <p class="head-answer">Что такое гипсонатяжные потолки?</p>
                <p class="content-answer">Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.</p>
                <router-link to="/video" class="video-preview">
                    <img src="/images/video-prev.jpg" alt="">
                    <div class="video-icon">
                        <span class="lnr lnr-camera-video"></span>
                    </div>
                </router-link>
                <div class="btn-block">
                    <router-link to="/video" class="btn btn-white-empty video-more">Видео призентация</router-link>
                    <router-link to="/form/gips" class="btn btn-white-empty more">Узнать подробности</router-link>
                </div>
                <div class="copyrigh">
                    2019 - {{ dateNow }} &copy; Профсервис.su
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap/all';

    export default {
         metaInfo: {
            title: 'Гипсотяжные потолки в Волгограде и области от компании Профсервис',
            meta:[
                 {name: 'description', content: 'Установка и обслуживание гипсотяжных потолков в Волгограде и области от компании Профсервис'}
            ]
        },
        computed: {
            dateNow: function(){
                return new Date().getFullYear();
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
                else if(from.name == 'video'){
                    gsap.from('.white-block h1, .white-block h2', {duration: 0.3, delay: 0.4,  opacity: 0});
                    gsap.from('.image-content-wrapper, .bg-top', {duration: 0.4, delay: 0.2, opacity: 0, x: -400});
                    gsap.from('.black-wrapper', {duration: 0.3, delay: 0.4, opacity: 0});
                    gsap.from('.black-bg', {duration: 0.6, left: 0});
                }
                else if(to.name == 'contact'){
                    gsap.from('.white-block h1, .white-block h2', {duration: 0.5, opacity: 0, y: -100});
                    gsap.from('.image-content-wrapper', {duration: 0.4, opacity: 0, y: 100});
                    gsap.from('.bg-top', {duration: 0.4, opacity: 0, y: -100});
                    gsap.from('.black-block', {duration: 0.4, delay: 0.2, opacity: 0, x: 100});
                    document.querySelector('.container').classList.add('open-contact');
                }
                else if(from.name == 'contact'){
                    document.querySelector('.container').classList.remove('open-contact');
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
            gsap.to('.service-button-wrapper', {duration: 0.3, opacity: 0, left: "-70px"});
            gsap.to('.call-wrapper', {duration: 0.5, y: 60, opacity: 0});
            document.querySelector('.call-wrapper').classList.remove('call-active');

            if(to.name == 'services'){
                gsap.to('.white-block h1, .white-block h2', {duration: 0.3, delay: 0.2, opacity: 0, y: -100});
                gsap.to('.image-content-wrapper, .bg-top', {duration: 0.3, delay: 0.1, opacity: 0, x: 200});
                gsap.to('.black-block', {duration: 0.3, opacity: 0, x: 200});
                setTimeout(next, 500);
            }
            else if(to.name == 'video'){
                gsap.to('.white-block h1, .white-block h2', {duration: 0.3, opacity: 0});
                gsap.to('.image-content-wrapper, .bg-top', {duration: 0.4, opacity: 0, x: -400});
                gsap.to('.black-wrapper', {duration: 0.3, opacity: 0});
                gsap.to('.black-bg', {duration: 0.6, left: 0});
                setTimeout(next, 600);
            }
            else if(to.name == 'index'){
                next();
            }
            else{
                gsap.to('.white-block h1, .white-block h2', {duration: 0.3, delay: 0.2, opacity: 0, y: -100});
                gsap.to('.image-content-wrapper', {duration: 0.3, delay: 0.1, opacity: 0, y: 100});
                gsap.to('.bg-top', {duration: 0.3, delay: 0.1, opacity: 0, y: -100});
                gsap.to('.black-block', {duration: 0.3, opacity: 0, x: 100});
                setTimeout(next, 500);
            }
        },
        methods: {
            swipeUp: function(){
                gsap.to('.black-block', {duration: 0.5, top: 0});
                gsap.to('.line-button', {duration: 0.3, backgroundColor: '#fff'});
                gsap.to('.menu-back-button', {duration: 0.3, color: '#fff'});
                gsap.to('.service-button-wrapper', {duration: 0.3, left: '-100px'});
                gsap.to('.poiner-wrapper', {duration: 0.3, bottom: '-100px'});
            },
            swipeDown: function(){
                gsap.to('.black-block', {duration: 0.5, top: '100%'});
                gsap.to('.line-button', {duration: 0.1, backgroundColor: '#000'});
                gsap.to('.menu-back-button', {duration: 0.1, color: '#000'});
                gsap.to('.service-button-wrapper', {duration: 0.3, left: '0'});
                gsap.to('.poiner-wrapper', {duration: 0.3, bottom: '10px'});
            }
        }
    }
</script>