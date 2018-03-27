<template>
  <div class="col-xs-12 p-3">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" :src="website.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="'/website/' + website.prettyname"><span
            @click="setId(website.id)">{{ website.title }}</span></router-link>
          <a :href="website.url" target="_blank">

            <svg class="thumb-launch-svg" height="20px"
               style="enable-background:new 0 0 512 512;"
               viewBox="0 0 512 512" width="20px" x="0px" xml:space="preserve" y="0px"><g><path
            d="M352,377.9H102.4V198.2h57.5c0,0,14.1-19.7,42.7-38.2H83.2c-10.6,0-19.2,
            8.5-19.2,19.1v217.9c0,10.5,8.6,19.1,19.2,19.1
            h288c10.6,0,19.2-8.5,19.2-19.1V288L352,319.4V377.9z
            M320,224v63.9l128-95.5L320,96v59.7C165.2,155.7,160,320,160,320
            C203.8,248.5,236,224,320,224z"></path></g></svg>
          </a>
        </h5>
        <!--<p class="card-text">{{ website.description }}</p>-->
        <p class="card-text">
          <small>{{ website.categories }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['website'],
    methods: {
      ...mapActions(['setId'])
    }
  }
</script>

<style scoped>
  img {
    opacity: 1.0;
    filter: alpha(opacity=50); /* For IE8 and earlier */
  }

  img:hover {
    opacity: 0.7;
    filter: alpha(opacity=100); /* For IE8 and earlier */
    cursor: pointer;
  }

  .card {
    border-radius: 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
  }

  a {
    color: black;
  }
  a:hover {
    color: #17a2b8;
    text-decoration: none !important;
  }
</style>
