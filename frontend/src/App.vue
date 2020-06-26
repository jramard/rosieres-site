<template>
  <div id="app">
    <Slider />
    <div class="container">
      <Table />
    </div>
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Slider,
    Table,
  },
};
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    margin-bottom: 25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
    &:hover {
      color: #3a8ee6;
    }
  }
</style>
