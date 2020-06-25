<template>
  <div id="app">
            <appheader></appheader>
            <appMain></appMain>
  </div>
</template>

<script>
import appheader from './components/header.vue'
import appMain from './components/main.vue'

export default {
       components :{
          appheader ,
          appMain
      }
}
</script>

<style>
   *{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
   }
   body{
     background-color: purple;
   }
</style>
