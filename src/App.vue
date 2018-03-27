<template>
  <div class="container-fluid">
    <app-header></app-header>
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }

</script>

<style>
  body {
    background-color: #E8E8E0;
  }

  .container-fluid {
    padding: 0px;
  }

</style>
