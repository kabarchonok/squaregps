<template>
  <div class="MarkerListItem">
    <div class="MarkerListItem__name">
      {{ $t(item.name) }}
    </div>
    <div class="MarkerListItem__coords">
      <span class="MarkerListItem__coordsItem">
        {{ round(item.lat) }}
      </span>
      <span class="MarkerListItem__coordsItem">
        {{ round(item.lat) }}
      </span>
    </div>
  </div>
</template>

<script>
import Marker from '../../classes/Marker'

export default {
  name: 'MarkerListItem',
  props: {
    item: {
      type: Marker,
      default () {
        return {}
      }
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
  font-size: 1.7rem;
  cursor: pointer;
  padding: $gap * 2;

  &:hover {
    background-color: $grayLight;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}

.MarkerListItem__coords {
  color: $gray;
  font-size: .6em;
}
</style>
