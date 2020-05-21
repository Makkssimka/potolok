<template>
    <div class="call-wrapper">
        <div class="call-item">
            <a href="tel:+79375485858"><img src="/images/phone-call.svg" alt=""> <span>Позвонить</span></a>
        </div>
        <div class="call-item">
            <a href="viber://chat?number=+79375485858"><img src="/images/logo_viber.svg" alt=""> <span>Viber</span></a>
        </div>
        <div class="call-item">
            <a href="whatsapp://send?phone=+79375485858"><img src="/images/logo_whatsapp.svg" alt=""> <span>WhatsApp</span></a>
        </div>
        <div class="call-item call-mobil">
            <a href="#" @click.prevent="openCall"><img src="/images/phone-forwarded.svg" alt=""> <span>Связаться</span></a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openCall: function(){
            let wrapper = document.querySelector('.call-wrapper');
            wrapper.classList.toggle('call-active');
        }
    }
}
</script>