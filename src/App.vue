<template>
  <div id="app">

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      navigate: function (event) {
        var menu = document.getElementsByTagName('navigate')
        this.isActive = !this.isActive
        menu.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto+Slab');
@import "variables.scss";

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-transform: uppercase;
    font: 700 100%/100% 'Roboto', sans-serif;
    width: 100%;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.25em;
}

.content {
  width: 100%;
}

section {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-holder {
  width: 100%;
  text-align: center;
  position: absolute;
}

.logo {
  width: 100px;
}
</style>
