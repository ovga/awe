<template>
  <div class="col-xs-12 p-3">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" :src="template.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          <!--<router-link :to="'/template/' + website.prettyName"><span-->
          <!--@click="setId(website.id)">{{ website.title }}</span></router-link>-->
          <!--<a :href="website.link" target="_blank">-->

          <!--<svg class="thumb-launch-svg" height="20px"-->
          <!--style="enable-background:new 0 0 512 512;"-->
          <!--viewBox="0 0 512 512" width="20px" x="0px" xml:space="preserve" y="0px"><g><path-->
          <!--d="M352,377.9H102.4V198.2h57.5c0,0,14.1-19.7,42.7-38.2H83.2c-10.6,0-19.2,-->
          <!--8.5-19.2,19.1v217.9c0,10.5,8.6,19.1,19.2,19.1-->
          <!--h288c10.6,0,19.2-8.5,19.2-19.1V288L352,319.4V377.9z-->
          <!--M320,224v63.9l128-95.5L320,96v59.7C165.2,155.7,160,320,160,320-->
          <!--C203.8,248.5,236,224,320,224z"></path></g></svg>-->
          <!--</a>-->
          {{ template.title }}
        </h5>
        <p class="card-text">{{ template.description }}</p>
        <p class="card-text">
          <small>{{ template.categories }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['template']
  }
</script>
