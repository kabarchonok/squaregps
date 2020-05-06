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
