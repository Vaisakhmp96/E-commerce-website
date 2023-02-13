<template>
  <div id="app" class='container'>
    <navbarData />
    <router-view></router-view>
  </div>
</template><script>
import navbarData from './components/navbarData.vue';
export default {
  name: 'app',
  components: {
    navbarData
  },
  data () {
    return {}
  }
}
</script>