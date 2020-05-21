<template>
    <div class="content-page-wrapper form-wrapper">
        <div class="empty-block content-block"></div>
        <div class="white-block content-block">
            <h2>Узнать больше о {{ head }}</h2>
            <p class="subhead">Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время</p>
            <div class="form-in-wrapper">
                <div class="form-block">
                    <div class="form-item">
                        <input id="name" type="text" class="form-input" required @blur="check" v-model="name">
                        <label for="name">Введите имя</label>
                        <div class="form-status">
                            <span class="lnr lnr-cross-circle"></span>
                            <span class="lnr lnr-checkmark-circle"></span>
                        </div>
                    </div>
                    <div class="form-item">
                        <input id="tel" type="text" class="form-input" required @blur="check" v-model="tel">
                        <label for="tel">Номер телефона</label>
                        <div class="form-status">
                            <span class="lnr lnr-cross-circle"></span>
                            <span class="lnr lnr-checkmark-circle"></span>
                        </div>
                    </div>
                    <div class="form-button">
                        <a href="#" class="btn btn-blue" :class="{ inactive: inactive }" @click.prevent="submitForm">Отправить заявку</a>
                        <div class="form-submit-text">Нажимая кнопку, Вы даете согласие на <router-link to="/soglashenie">обработку персональных данных</router-link></div>
                    </div>
                </div>
                <div class="result-block">
                    <img src="/images/mail.png" alt="Заявка принята!">
                    <p>Заявка принята! В ближайшее время с Вами свяжется наш менеджер.</p>
                </div>
            </div>
        </div>
        <div class="empty-block content-block"></div>
    </div>
</template>

<script>
import gsap from 'gsap/all';
import { mapGetters } from 'vuex';

export default {
    data: function(){
        return {
            name: '',
            tel: '',
            head: ''
        }
    },
    metaInfo: function() {
        return {
            title: `Узнать больше о ${this.head}`,
            meta:[
                 {name: 'description', content: `Узнать подробнее о ${this.head} у нашего специалиста - Профсервис`}
            ]
        }
    },
    mounted: function(){
        gsap.to('.menu-back-button', {duration: 0.3, color: '#000'});
        gsap.to('.line-button', {duration: 0.3, backgroundColor: '#000'});
        gsap.from('.white-block h2, .subhead', {duration: 0.5, opacity: 0, y: -100});
        gsap.from('.form-in-wrapper', {duration: 0.5, opacity: 0, y: 100});

        let category = this.$route.params.category;
        switch (category) {
            case 'gips':
                this.head = 'гипсотяжных потолках';
                break;
            case 'dubl-vision':
                this.head = 'потолоках дабл вижн';
                break;
            case 'kaab':
                this.head = 'бесщелевых потолках KRAAB';
                break;
            case 'reznie':
                this.head = 'резных потолках';
                break;
            case 'design':
                this.head = 'дизайнерских потолках с освещением';
                break;
            case 'loft':
                this.head = 'потолках в стиле LOFT';
                break;
            case 'svet-line':
                this.head = 'световых линиях';
                break;
            case 'inline-svet':
                this.head = 'потолках с внутренней подсветкой';
                break;
            case 'foto-print':
                this.head = 'потолках с фотопечатью';
                break;
            case 'tkanevie':
                this.head = 'тканевых потолки';
                break;
            case 'mnogourovnevie':
                this.head = 'многоуровневых потолках';
                break;
            case 'parjachie':
                this.head = 'парящих потолках';
                break;
            case 'krivoline':
                this.head = 'потолках с криволинейной спайкой';
                break;
            default:
                this.head = 'гипсотяжных потолках';
                break;
        }
    },
    beforeRouteLeave(to, from, next) {
        gsap.to('.white-block h2, .subhead', {duration: 0.5, opacity: 0, y: -100});
        gsap.to('.form-in-wrapper', {duration: 0.5, opacity: 0, y: 100});
        setTimeout(next, 500);
    },
    computed: {
        ...mapGetters(['URL']),
        inactive: function(){
            return this.name.trim() && this.tel.trim()?false:true;
        }
    },
    methods: {
        check: function(e){
            let elem = e.target;
            let errorElem = elem.parentElement.querySelector('.lnr-cross-circle');
            let okElem = elem.parentElement.querySelector('.lnr-checkmark-circle');
            if(elem.value == ''){
                gsap.to(errorElem, {duration: 0.3, opacity: 1, y: 0});
                gsap.to(okElem, {duration: 0.3, opacity: 0, y: -30});
                elem.classList.remove('ok-form');
                elem.classList.add('error-form');
            }
            else{
                gsap.to(errorElem, {duration: 0.3, opacity: 0, y: 30});
                gsap.to(okElem, {duration: 0.3, opacity: 1, y: 0});
                elem.classList.remove('error-form');
                elem.classList.add('ok-form')
            }
        },
        submitForm: async function(){
            if(this.name.trim() && this.tel.trim()){
                let fDate = new FormData();
                fDate.set('slug', this.$route.params.category);
                fDate.set('tel', this.tel.trim());
                fDate.set('name', this.name.trim());

                fetch(`${ this.URL }send-mail`,{
                    method: 'POST',
                    body: fDate
                })
                .then(response => response.json())
                .then(() => {
                    this.name = this.tel = '';
                    gsap.to('.lnr-cross-circle, .lnr-checkmark-circle', {duration: 0.3, opacity: 0});
                    gsap.to('.form-block', {duration: 0.5, opacity: 0, x: -150});
                    gsap.to('.result-block', {duration: 0.5, opacity: 1, x: 0});
                });
            }
        }
    }
}
</script>