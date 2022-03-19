<template>
  <Header :is-authenticated="isAuthenticated" />
  <Main :is-authenticated="isAuthenticated" @update:authenticated="loggedIn" />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Main from "./components/Main.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main
  },
  data() {
    return {
      isAuthenticated: false,
    }
  },
  methods: {
    loggedIn(value) {
      this.isAuthenticated = value;
      this.isAuthenticated ? this.$router.push('/') : this.$router.push('/login');
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
</style>
