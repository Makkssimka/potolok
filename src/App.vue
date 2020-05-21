<template>
  <div class="container">
    <preloader></preloader>
    <menu-top></menu-top>
    <contact></contact>
    <router-link to="/services" class="service-button-wrapper">
      <div class="service-button">
        <div class="vertical-service-name">Стоимость потолков</div>
        <span class="lnr lnr-chevron-down"></span>
      </div>
    </router-link>
    <router-view></router-view>
    <call-block></call-block>
  </div>
</template>

<script>
  import Preloader from "./components/PreloaderComponent";
  import Menu from "./components/MenuComponent";
  import Contact from "./components/ContactComponent";
  import Call from "./components/CallComponent";

  export default {
    components: {
      "preloader": Preloader,
      "menu-top": Menu,
      "contact": Contact,
      "call-block": Call
    }
  }
</script>

<style lang="sass">
  @import './styles/main'
</style>