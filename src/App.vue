<template>
  <div id="app">
    <TheMarkerList
      class="MarkerList"
      :items="markers"
      @click="changeView"
    />
    <TheMap
      class="Map"
      :url="url"
      :latlng="latlng"
      :markers="markers"
      @click="onClick"
    />
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
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      latlng: {
        lat: 56.833333,
        lng: 60.583333
      },
      markers: []
    }
  },
  methods: {
    setMarket (latlng) {
      this.markers.push({
        name: 'marker',
        lat: latlng.lat,
        lng: latlng.lng
      })
    },
    onClick (event) {
      this.setMarket(event.latlng)
    },
    changeView (event) {
      this.latlng = {
        lat: event.lat,
        lng: event.lng
      }
    }
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
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  #app {
    grid-template-rows: 1fr;
  }

  .MarkerList {
    grid-row: 1;
  }

  .Map {
    grid-row: 1;
  }
}

@media (min-width: 768px) {
  #app {
    grid-template-columns: 240px 4fr;
  }

  .MarkerList {
    grid-column: 1;
  }

  .Map {
    grid-column: 2;
  }
}
</style>
