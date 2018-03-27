<template>
  <div class="container">
    <br/>
    <h2 class="text-center">You are browsing {{ templates.length }} marvelous templates</h2>
    <div class="container">
      <div class="row">
        <app-template-snippet v-for="template in templates" :template="template" :key="template.id"></app-template-snippet>
      </div>
    </div>
  </div>
</template>

<script>
  import TemplateSnippet from './TemplateSnippet.vue'
  import { templates } from "../../data/templates";

  export default {
    data() {
      return {
        templates: []
      }
    },
    components: {
      appTemplateSnippet: TemplateSnippet
    },
    created() {
      this.templates = templates
    }
  }
</script>
