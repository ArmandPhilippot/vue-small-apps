<template>
  <Header/>
  <Main />
  <Footer/>
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
