<template>
  <div class="container">
    <h1>Website details page</h1>
    <hr/>
    <p>{{ website.title }}</p>
    <p>{{ website.description }}</p>
    <a class="btn btn-primary" :href="website.url" target="_blank">Launch Website</a>
    <hr/>
    <p>Similar websites</p>
    <iframe src="https://widget.similarweb.com/sources/gsp.ro"
            frameborder="0" width="450" height="200" style="border: solid 1px #D7D7D7;">

    </iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        website: {}
      }
    },
    created() {
      // this.website = websites.find( (obj) => {
      //   return obj.id === this.$store.state.selectedWebsiteId
      // });

      this.$http.get('http://localhost:8083/websites/' + this.$store.state.selectedWebsiteId + '')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.website = data;
        })
    }
  }

</script>
