<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />

  </div>
</template>

<script>

import './styles/global.css';
import Header from './components/Header.vue';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
}
}
</script>


