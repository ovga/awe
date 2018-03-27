<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <router-link to="/" class="navbar-brand">Websites Examples</router-link>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/" exactActiveClass="active" tag="li"><a class="nav-link">Home</a></router-link>
        <router-link to="/templates" exactActiveClass="active" tag="li"><a class="nav-link">Templates</a></router-link>
        <router-link to="/resources" exactActiveClass="active" tag="li"><a class="nav-link">Resources</a></router-link>
        <router-link to="/about" exactActiveClass="active" tag="li"><a class="nav-link">About</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

<style>
</style>
