<template>
  <div class="container">
    <br/>
    <h2 class="text-center">You are browsing {{ totalElements }} marvelous websites</h2>
    <div class="container">
      <div class="row">
        <app-website-snippet v-for="website in websites" :website="website" :key="website.id"></app-website-snippet>
      </div>

      <nav aria-label="Search results">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: firstPage}">
            <a class="page-link" tabindex="-1" @click="navigateTo(--pageNumber)">Previous</a>
          </li>
          <li class="page-item"
              :class="{active: selectedPage === page}"
              v-for="page in totalPages"
              v-if="page == 1 || page == totalPages || Math.abs(selectedPage - page) < 3">

            <a class="page-link" v-if="(page == totalPages && Math.abs(page - selectedPage) > 3)"
               @click="navigateTo(++pageNumber)">...</a>

            <a class="page-link" @click="navigateTo(page-1)">{{ page }}</a>

            <a class="page-link" v-if="(page == 1 && Math.abs(page - selectedPage) > 3)"
               @click="navigateTo(--pageNumber)">...</a>

          </li>
          <li class="page-item" :class="{disabled: lastPage}">
            <a class="page-link" tabindex="-1" @click="navigateTo(++pageNumber)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import WebsiteSnippet from './website/WebsiteSnippet.vue';

  export default {
    data() {
      return {
        websites: [],
        firstPage: true,
        lastPage: false,
        totalPages: 0,
        totalElements: 0,
        pageNumber: 0,
        size: 0,
        selectedPage: 1
      }
    },
    components: {
      appWebsiteSnippet: WebsiteSnippet
    },
    methods: {
      navigateTo(page) {
        this.$http.get('http://localhost:8083/websites', {params: {page: page}})
          .then(response => {
            return response.json();
          })
          .then(data => {
            let content = data.content;
            const resultArray = [];
            for (let key in content) {
              resultArray.push(content[key]);
            }
            this.websites = resultArray;

            this.firstPage = data.first;
            this.lastPage = data.last;
            this.pageNumber = data.number;
            this.size = data.size;
            this.selectedPage = page + 1;
          })
      }
    },
    created() {
      this.$http.get('http://localhost:8083/websites')
        .then(response => {
          return response.json();
        })
        .then(data => {
          let content = data.content
          const resultArray = [];
          for (let key in content) {
            resultArray.push(content[key]);
          }
          this.websites = resultArray;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
        })
    }
  }

</script>

<style scoped>
  li {
    display: flex;
  }
</style>
