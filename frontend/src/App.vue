<template>
  <div id="app">
    <Slider />
    <div class="container">
      <Table />
    </div>
    <Footer />
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import Table from "./components/Table.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Slider,
    Table,
    Footer,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      color: #409eff;
    }
  }
</style>
