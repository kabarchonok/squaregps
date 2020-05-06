<template>
  <div id="app">
    <TheMarkerList class="MarkerList" />
    <TheMap class="Map" />
  </div>
</template>

<script>
import TheMarkerList from './components/TheMarkerList'
import TheMap from './components/TheMap'

export default {
  name: 'App',
  components: {
    TheMap,
    TheMarkerList
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

html, body {
  height: 100%;
}

#app {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
}

.MarkerList {
  grid-column: 1;
}

.Map {
  grid-column: 2;
}
</style>
