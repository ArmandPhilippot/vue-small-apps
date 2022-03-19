<template>
  <Header :is-authenticated="isAuthenticated" />
  <Main
    :is-authenticated="isAuthenticated"
    :current-user="currentUser"
    @update:current-user="updateCurrentUser"
  />
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
      currentUser: '',
      isAuthenticated: false,
    }
  },
  methods: {
    redirectUser() {
      this.isAuthenticated ? this.$router.push('/') : this.$router.push('/login');
    },
    updateCurrentUser(value) {
      this.currentUser = value;
      this.isAuthenticated = this.currentUser ? true : false;
      localStorage.setItem('currentUser', this.currentUser);
      this.redirectUser();
    }
  },
  mounted() {
    const user = localStorage.getItem('currentUser');
    this.currentUser = user;
    this.isAuthenticated = user ? true : false;
    this.redirectUser();
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
