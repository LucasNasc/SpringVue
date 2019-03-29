<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view :hellomsg="msg"></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Bem vindo ao Projeto SpringVue'
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
