<template>
    <div class="video-container">
        <video id="video" src="/images/video.mp4" poster="/images/poster.jpg"></video>
    </div>
</template>

<script>
import gsap from 'gsap/all';

export default {
    data: function(){
        return {
            video: null
        }
    },
    metaInfo: {
        title: 'Видео-призентация виртуальной проекции при выборе натяжных потолков  - Профсервис',
        meta:[
                {name: 'description', content: 'Видео-призентация виртуальной проекции при выборе натяжных потолков'}
        ]
    },
    mounted: function(){
        let video = this.video = document.querySelector('#video');
        gsap.from('video', {
            duration: 0.8, 
            opacity: 0, 
            x: '50%', 
            onComplete: () => {
                video.play();
                video.controls = true;
            }
        });
        gsap.to('.line-button', {duration: 0.3, backgroundColor: '#fff'});
        gsap.to('.menu-back-button', {duration: 0.3, color: '#fff'});
    },
    beforeRouteLeave(to, from, next) {
        this.video.pause();
        this.video.controls = true;
        gsap.to('video', {
            duration: 0.5, 
            opacity: 0, 
            x: '50%',
        });
        setTimeout(next, 500)
    }
}
</script>