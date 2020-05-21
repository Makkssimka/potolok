<template>
    <div class="contact-container">
        <p class="head-contact">Профсервис <router-link to="/"><span class="lnr lnr-cross"></span></router-link></p>
        <div class="map-wrapper"></div>
        <p class="adress-contact"><span class="lnr lnr-map-marker"></span> ул. Елецкая, д. 455 (оф. 311)</p>
        <a href="tel: +79375485858" class="telephone-contact"><span class="lnr lnr-phone-handset"></span> +7 (937) 548 58 58</a>
        <div class="btn-wrapper">
            <router-link to="/" class="btn btn-blue">Обратный звонок</router-link>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: function() {
        return {
            title: 'Контакты компании Профсервис'
        }
    },
    mounted: function(){
        let mapWrap = document.querySelector('.map-wrapper');
        let script = document.createElement('script');
        script.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afc44d85258fa02a6b8bb194b29c3b4dc366042657a0eb05c8bd48a14d6bbb4e6&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true');
        script.setAttribute('async', true);
        mapWrap.appendChild(script);
    }
}
</script>