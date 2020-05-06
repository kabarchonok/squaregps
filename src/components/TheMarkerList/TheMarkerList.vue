<template>
  <div class="MarkerList">
    <div class="MarkerList__header">
      Маркеры
    </div>
    <div class="MarkerList__items">
      <MarkerListItem
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import MarkerListItem from './MarkerListItem'

export default {
  name: 'TheMarkerList',
  components: { MarkerListItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.MarkerList__header {
  background-color: $blue;
  color: white;
  font-size: 1.25rem;
  padding: $gap * 2;
}

.MarkerList__items {
  padding: $gap * 2;
}
</style>
