<template>
  <div id="app">
    <Header />
    <FadeTransition :duration="900" mode="out-in">
      <router-view path="$router.key" />
    </FadeTransition>
    <Footer />

  </div>
</template>

<script>

import './styles/global.css';
import Header from './components/Header.vue';
import Footer from './components/pages/Footer';

import { FadeTransition } from 'vue2-transitions';

export default {
  name: 'App',
  components: {
    FadeTransition,
    Header,
    Footer
}
}
</script>


