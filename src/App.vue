<template>
  <div class="container" >
    <Header/>
  </div>
</template>

<script>
import Header from '@/views/Header.vue';


export default {
  name: 'App',

  components: {
    Header
  },

}
</script>

<style>
.container{
  max-width: 1000px;
}
</style>
