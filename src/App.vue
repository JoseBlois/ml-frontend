<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout';

export default {
  components: {
    Layout,
  },
  created() {
    console.log('App mounted')
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
