<template>
  <div>
    <LMap
      ref="map"
      @click="onclick"
    >
      <LTileLayer
        :url="url"
      />
      <LMarker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="setLatLng(marker.lat, marker.lng)"
      />
    </LMap>
  </div>
</template>

<script>
import { latLng, Icon } from 'leaflet'
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet'

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'TheMap',
  components: {
    LMap,
    LMarker,
    LTileLayer
  },
  props: {
    url: {
      type: String,
      required: true
    },
    latlng: {
      type: Object,
      required: true
    },
    markers: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    latlng (val) {
      this.setView(val)
    }
  },
  mounted () {
    this.setView(this.latlng)
  },
  methods: {
    setLatLng (lat, lng) {
      return latLng(lat, lng)
    },
    setView (latlng) {
      this.$nextTick(() => {
        this.$refs.map.mapObject.setView([latlng.lat, latlng.lng], 15)
      })
    },
    onclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
