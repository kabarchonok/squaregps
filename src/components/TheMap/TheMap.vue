<template>
  <div>
    <LMap
      ref="map"
      @click="onclick"
    >
      <LTileLayer
        :url="url"
      />
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'TheMap',
  components: {
    LMap,
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
    setView (latlng) {
      this.$nextTick(() => {
        this.$refs.map.mapObject.setView([latlng.lat, latlng.lng], 13)
      })
    },
    onclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
