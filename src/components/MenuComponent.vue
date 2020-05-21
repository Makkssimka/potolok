<template>
    <div class="menu-wrapper">
        <div class="menu-back-button">
            <span class="lnr lnr-arrow-left" @click="toBack"></span>
        </div>
        <div class="logo-wrapper">
            <router-link to="/">
                <picture>
                    <source srcset="/images/logo.png" media="(max-width: 640px)">
                    <source srcset="/images/logo-1.png">
                    <img srcset="/images/logo.png">
                </picture>
            </router-link>
        </div>
        <div class="menu-button-wrapper" @click="menuClickEvent" :class="{ 'open-menu':  menuOpen}">
            <div class="line-button"></div>
            <div class="line-button"></div>
            <div class="line-button"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        methods: {
            menuClickEvent: function(){
                if(this.menuOpen){
                    this.$router.back();
                }
                else{
                    this.$router.push('/menu');
                }
            },
            toBack: function(){
                window.history.back();
            }
        },
        computed: {
            ...mapGetters(['menuOpen'])
        }
    }
</script>