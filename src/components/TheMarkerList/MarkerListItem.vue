<template>
  <div class="MarkerListItem">
    <div class="MarkerListItem__name">
      {{ name }}
    </div>
    <div class="MarkerListItem__coords">
      <span class="MarkerListItem__coordsItem">
        {{ round(lat) }}
      </span>
      <span class="MarkerListItem__coordsItem">
        {{ round(lat) }}
      </span>
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
  },
  methods: {
    round (val) {
      return val.toFixed(5)
    }
  }
}
</script>

<style scoped lang="scss">
.MarkerListItem {
  color: $black;
  font-size: 1.25rem;
  cursor: pointer;
  padding: $gap * 2;

  &:hover {
    background-color: $grayLight;
  }
}

.MarkerListItem__coords {
  color: $gray;
  font-size: .75rem;
}
</style>
