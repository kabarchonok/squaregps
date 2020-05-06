<template>
  <LMap
    ref="map"
    class="Map"
    @click="onclick"
  >
    <LTileLayer
      :url="url"
    />
  </LMap>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'TheMap',
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.map.mapObject.setView([56.833333, 60.583333], 13)
    })
  },
  methods: {
    onclick (event) {
      console.log()
    }
  }
}
</script>
