<template>
  <div class="MarkerListItem">
    <div class="MarkerListItem__name">
      {{ name }}
    </div>
    <div class="MarkerListItem__coords">
      <div class="MarkerListItem__coordsItem">
        {{ lat }}
      </div>
      <div class="MarkerListItem__coordsItem">
        {{ lng }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkerListItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    lat: {
      type: Number,
      default: 0
    },
    lng: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.MarkerList__header {
  position: relative;
}
</style>
