<template>
  <HeaderC/>
  <div class="container min-vh-100">
    <router-view/>
  </div>
  <FooterC/>
</template>
<script>
import HeaderC from './components/HeaderC.vue';
import FooterC from './components/FooterC.vue';
export default {
  components: {
    HeaderC,
    FooterC
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
