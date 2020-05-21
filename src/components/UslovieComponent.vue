<template>
    <div class="content-page-wrapper service-wrapper">
        <div class="empty-block content-block"></div>
        <div class="white-block content-block">
            <h2>Соглашение на обработку персональных данных</h2>
            <p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>
            <p>Все лица заполнившие сведения составляющие персональные данные на данном сайте, а также, разместившие, иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных.</p>
            <p>Гражданин, принимая настоящее Соглашение, выражают свою заинтересованность и полное согласие, что обработка их персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>
        </div>
        <div class="empty-block content-block"></div>
    </div>
</template>

<script>
import gsap from 'gsap/all';

export default {
    metaInfo: function() {
        return {
            title: 'Соглашение на обработку персональных данных',
            meta:[
                 {name: 'description', content: 'Соглашение на обработку персональных данных'}
            ]
        }
    },
    mounted: function(){
        gsap.from('.white-block h2', {duration: 0.5, opacity: 0,  y: -50});
        gsap.from('.white-block p', {duration: 0.5, opacity: 0, y: 50});
        gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
        gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
        gsap.to('.menu-wrapper', {duration: 0.01, backgroundColor: '#fff'});
    },
    beforeRouteLeave(to, from, next) {
        gsap.to('.white-block h2', {duration: 0.5, opacity: 0, y: -50});
        gsap.to('.white-block p', {duration: 0.5, opacity: 0, y: 50});
        gsap.to('.form-in-wrapper', {duration: 0.5, opacity: 0, y: 100});
        gsap.to('.menu-wrapper', {duration: 0.01, backgroundColor: '#ffffff00'});
        setTimeout(next, 500);
    }
    
}
</script>